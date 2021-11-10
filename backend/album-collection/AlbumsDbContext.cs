using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Configuration;
using album_collection.Models;

namespace album_collection
{
	public class AlbumsDbContext : DbContext
	{

		public DbSet<Album> Albums { get; set; }
		public DbSet<Artist> Artists { get; set; }
		public DbSet<Review> Reviews { get; set; }
		public DbSet<Song> Songs { get; set; }

		public IConfiguration Configuration;

		public AlbumsDbContext(IConfiguration configuration)
		{
			Configuration = configuration;
		}
		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			var connectionString = Configuration.GetConnectionString("DefaultConnection");

			optionsBuilder.UseSqlServer(connectionString).UseLazyLoadingProxies();
			base.OnConfiguring(optionsBuilder);

		}
		protected override void OnModelCreating(ModelBuilder modelbuilder)
		{

		}
	}
}
