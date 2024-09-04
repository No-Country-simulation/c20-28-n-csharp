﻿using System;
using System.Threading.Tasks;
using Bankest.DTOs.Cliente;
using Bankest.Models;

namespace Bankest.Services.Interfaces.ICliente
{
    public interface IClienteService
    {
       Task<Usuario?> ObtenerdatosClienteAsync(Guid clientId);
       Task<List<CuentaBancariaDto>> ObtenerCuentasBancariasAsync(string userId);
       Task<CuentaBancaria> CrearCuentaBancariaAsync(Guid usuarioId, CrearCuentaBancariaDto nuevaCuentaDto);
        Task<(bool exito, string mensaje)> EliminarCuentaAsync(Guid cuentaId, Guid usuarioId);

    }
}
