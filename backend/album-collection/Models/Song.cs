using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace album_collection.Models
{
	public class Song
	{
		public Song() { }
		public Song(int id, string title, int albumid)
		{
			Id = id;
			Title = title;
			AlbumId = albumid;
		}
		public int Id { get; set; }
		public string Title { get; set; }
		public virtual Album Album { get; set; }
		public int AlbumId { get; set; }

	}
}
