using LuftbornAssesment.Domain.DriversDomain;

namespace LuftbornAssesment.Infrastructure.Sql.Mappers
{
    public static class Mapper
    {
        public static Driver UpdateWith(this Driver record, Driver input)
        {
            record.Firstname = input.Firstname;
            record.Lastname = input.Lastname;
            record.Email = input.Email;
            record.PhoneNumber = input.PhoneNumber;
            return record;
        }
    }
}