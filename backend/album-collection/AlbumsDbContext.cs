using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace album_collection
{
    public class AlbumsDbContext : DbContext
    {
		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			var connectionString = "Server=(localdb)\\mssqllocaldb; Database=AlbumDB_110921; Trusted_Connection=True";
			optionsBuilder.UseSqlServer(connectionString).UseLazyLoadingProxies();
			base.OnConfiguring(optionsBuilder);

		}
		protected override void OnModelCreating(ModelBuilder modelbuilder)
		{

		}
	}
