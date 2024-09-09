using System;
using Bankest.Models;
using Bankest.Services.Token;
using Bankest.Util;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Data;
using System.Text;
using Bankest.Services.Implementation.Cliente;
using Bankest.Services.Interfaces.ICliente;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.VisualStudio.Web.CodeGeneration.Design;
using Bankest.Services.Interfaces.ITransacciones;
using Bankest.Services.Implementation.Transacciones;
using Bankest.Services.Interfaces.IInversiones;
using Bankest.Services.Implementation.Inversiones;
using Bankest.Services.Implementation.User;
using Bankest.Services.Interfaces.IUsuarios;
using Bankest.Services.Interfaces.IPagos;
using Bankest.Services.Implementation.Pagos;
using Bankest.Services.Interfaces;
using Bankest.Services.Implementation;

var builder = WebApplication.CreateBuilder(args);

// Configuración de CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("NuevaPolitica", app =>
    {
        app.AllowAnyOrigin()
           .AllowAnyHeader()
           .AllowAnyMethod();
    });
});

// Add services to the container.
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

//Configuracion de Swagger para que utilice el Bearer token
builder.Services.AddSwaggerGen(c =>
{
    // Include 'SecurityScheme' to use JWT Authentication
    var jwtSecurityScheme = new OpenApiSecurityScheme
    {
        BearerFormat = "JWT",
        Name = "Authorization",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.ApiKey,
        Scheme = JwtBearerDefaults.AuthenticationScheme,
        Description = "Put Bearer + your token in the box below",
        Reference = new OpenApiReference
        {
            Id = JwtBearerDefaults.AuthenticationScheme,
            Type = ReferenceType.SecurityScheme
        }
    };
    c.AddSecurityDefinition(jwtSecurityScheme.Reference.Id, jwtSecurityScheme);
    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        { jwtSecurityScheme, Array.Empty<string>() }
    });
});

// Configura los servicios de autenticación
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options => {
    // Verificación adicional de la clave JWT para evitar que sea nula o vacía
    var jwtKey = builder.Configuration["Jwt:key"];
    if (string.IsNullOrEmpty(jwtKey))
    {
        throw new InvalidOperationException("JWT key is missing or empty in configuration.");
    }

    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = builder.Configuration["Jwt:Issuer"],
        ValidAudience = builder.Configuration["Jwt:Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey))
    };
});

builder.Services.AddAuthorization();

builder.Services.AddDbContext<StoreContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddScoped<TokenService>();
builder.Services.AddScoped<IUsuarioService, UsuarioService>();
builder.Services.AddScoped<IClienteService, ClienteService>();
builder.Services.AddScoped<ITransaccionService, TransaccionesService>();
builder.Services.AddScoped<IInversiones, InversionesServicio>();
builder.Services.AddScoped<IPagoService, PagosService>();
builder.Services.AddScoped<IDispositivoCOnfiable, DispositivoCOnfiableService>();
builder.Services.AddScoped<InteresService>();

builder.Services.AddAutoMapper(typeof(AutoMapperProfile));

// Configurar Identity
builder.Services.AddIdentity<Usuario, IdentityRole<Guid>>()
    .AddEntityFrameworkStores<StoreContext>()
    .AddDefaultTokenProviders();

builder.Logging.ClearProviders();
builder.Logging.AddConsole();
builder.Logging.AddDebug();
builder.Services.AddHttpContextAccessor();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Aplica la política de CORS
app.UseCors("NuevaPolitica");
app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<StoreContext>();
    var userManager = scope.ServiceProvider.GetRequiredService<UserManager<Usuario>>();
    var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole<Guid>>>();
    var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();

    try
    {
        context.Database.Migrate(); // Aplica las migraciones
        await DbInitializer.Initialize(context, userManager, roleManager); // Inicializa los datos
    }
    catch (Exception ex)
    {
        logger.LogError(ex, "Ocurrió un problema durante la migración o inicialización de la base de datos.");
    }
}

app.Run();
