using AutoMapper;
using Bankest.DTOs;
using Bankest.Models;

namespace Bankest.Util
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile() 
        {
            CreateMap<Usuario, loginRequestDto>().ReverseMap();
        }
        
    }
}
