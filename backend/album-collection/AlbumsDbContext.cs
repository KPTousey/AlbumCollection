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
			modelbuilder.Entity<Album>().HasData(
				new Album(1, "The Wall", 1, "www.tbd", "RecordLabel"),
				new Album(2, "Out Of Step", 2, "www.tbd", "Dischord Records"),
				new Album(3, "Not a Pretty Girl", 3, "www.url", "Riot Grrrl Records")
				);
			modelbuilder.Entity<Artist>().HasData(
				new Artist(1, "Pink Floyd", "www.tbd"),
				new Artist(2, "Minor Threat", "www.tbd"),
				new Artist(3, "Ani DiFranco", "www.url")
				);
			modelbuilder.Entity<Review>().HasData(
				new Review(1, "John Smith", "Pretty good!!!!!", 1),
				new Review(2, "Sammy Squirrel", "I'm a minor at heart", 2),
				new Review(3, "Rebecca", "I could be the million that you never made", 3)
				);
			modelbuilder.Entity<Song>().HasData(
				new Song(1, "Another Brick in the Wall", 1),
				new Song(2, "Steppin' Stone", 2),
				new Song(3, "Not a Pretty Girl", 3)
				);
		}
	}
}
