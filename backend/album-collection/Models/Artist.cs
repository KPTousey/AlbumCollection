using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace album_collection.Models
{
	public class Artist
	{
		public Artist() { }
		public Artist(int id, string name, string imageurl)
		{
			Id = id;
			Name = name;
			ImageURL = imageurl;
		}
		public int Id { get; set; }
		public string Name { get; set; }
		public string ImageURL { get; set; }
		public virtual List<Album> Albums { get; set; }
	}
}
