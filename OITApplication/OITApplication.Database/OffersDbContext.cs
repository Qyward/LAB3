using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace OITApplication.Database
{
    public class OffersDbContext : DbContext
    {
        public OffersDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Offer> Offers {  get; set; }
    }
}
