using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace album_collection.Models
{
	public class Album
	{
		public Album() { }
		public Album(int id, string title, int artistid, string imageurl, string recordlabel) {
			Id = id;
			Title = title;
			ArtistId = artistid;
			ImageURL = imageurl;
			RecordLabel = recordlabel;
		} 

		public int Id { get; set; }
		public string Title { get; set; }
		public int ArtistId { get; set; }
		public virtual Artist Artist { get; set; }
		public virtual List<Song> Songs {get; set;}
		public string ImageURL { get; set; }
		public virtual List<Review> Reviews { get; set; } 
		public string RecordLabel { get; set; }
	}
}
