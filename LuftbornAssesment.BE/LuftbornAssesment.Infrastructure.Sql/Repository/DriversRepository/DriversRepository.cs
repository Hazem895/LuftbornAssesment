using LuftbornAssesment.Domain.DriversDomain;
using LuftbornAssesment.Domain.IRepository;
using LuftbornAssesment.Infrastructure.Sql.Mappers;
using Microsoft.EntityFrameworkCore;

namespace LuftbornAssesment.Infrastructure.Sql.Repository.DriversRepository
{
    public class DriversRepository : ICrudCommandsRepository<Driver>
    {
        private readonly ApplicationDbContext _context;
        private readonly DbSet<Driver> _DriversSet;

        public DriversRepository(ApplicationDbContext context)
        {
            _context = context;
            _DriversSet = _context.Drivers;
        }

        public async Task<string> Create(Driver Input)
        {

            Input.DriverId = Guid.NewGuid();

            await _DriversSet.AddAsync(Input);

            await _context.SaveChangesAsync();

            return $"{Input.DriverId} Added Successfully";
        }

        public async Task<string> Delete(Guid ID)
        {
            Driver? record = await ReadById(ID);
            if (record != null)
            {
                _DriversSet.Remove(record);

                await _context.SaveChangesAsync();

                return $"{ID} deleted Successfully";
            }
            else
            {
                throw new Exception("Not Exist");

            }
        }

        public async Task<List<Driver>> ReadAll()
        {
            return await _DriversSet.ToListAsync();
        }

        public async Task<Driver?> ReadById(Guid? Id)
        {
            return await _DriversSet.SingleOrDefaultAsync(x => x.DriverId == Id);
        }

        public async Task<string> Update(Driver input, Guid ID)
        {
            Driver? record = await ReadById(ID);
            if (record != null)
            {
                record.UpdateWith(input);

                _DriversSet.Update(record);

                await _context.SaveChangesAsync();

                return $"{ID} Updated Successfully";
            }
            else
            {
                throw new Exception("Not Exist");
            }
        }
    }
}
