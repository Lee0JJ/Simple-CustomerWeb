using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.Net;
using System.Xml.Linq;

namespace WebAPI.Models
{
    public class CustomerDBContext:DbContext
    {
        public CustomerDBContext(DbContextOptions<CustomerDBContext> options):base(options)
        {
        }
        public DbSet<DCustomer> DCustomer { get; set; }

    }
}
