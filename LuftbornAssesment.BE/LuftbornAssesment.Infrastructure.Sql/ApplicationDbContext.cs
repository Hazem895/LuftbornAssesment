using LuftbornAssesment.Domain.DriversDomain;
using Microsoft.EntityFrameworkCore;

namespace LuftbornAssesment.Infrastructure.Sql
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<Driver> Drivers { get; set; }
    }
}