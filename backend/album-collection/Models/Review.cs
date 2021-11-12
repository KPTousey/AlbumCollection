using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace album_collection.Models
{
	public class Review
	{
		public Review() { }
		public Review(int id, string reviewername, string content, int albumid)
		{
			Id = id;
			ReviewerName = reviewername;
			Content = content;
			AlbumId = albumid;
		}
		public int Id { get; set; }
		public string ReviewerName { get; set; }
		public string Content { get; set; }
		public virtual Album Album { get; set; }
		public int AlbumId { get; set; }
	}
}
