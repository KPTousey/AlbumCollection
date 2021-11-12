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
				new Album(1, "The Wall", 1, "https://static.wikia.nocookie.net/pinkfloyd/images/f/f5/The_Wall.jpg/revision/latest?cb=20181104235825", "RecordLabel"),
				new Album(2, "Out Of Step", 2, "https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Minor_Threat_-_Out_of_Step.jpg/220px-Minor_Threat_-_Out_of_Step.jpg", "Dischord Records"),
				new Album(3, "Not a Pretty Girl", 3, "https://cdn.shopify.com/s/files/1/0153/0645/products/notaprettygirl_1024x1024.jpeg?v=1571262453", "Riot Grrrl Records")
				);
			modelbuilder.Entity<Artist>().HasData(
				new Artist(1, "Pink Floyd", "https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Pink_Floyd_-_all_members.jpg/250px-Pink_Floyd_-_all_members.jpg"),
				new Artist(2, "Minor Threat", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Minor-threat-malcolm-riviera.jpg/260px-Minor-threat-malcolm-riviera.jpg"),
				new Artist(3, "Ani DiFranco", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ani_Difranco_Ancienne_Belgique.jpg/220px-Ani_Difranco_Ancienne_Belgique.jpg")
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
