using album_collection.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace album_collection.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ReviewsController : ControllerBase
	{
		private AlbumsDbContext _db;
		public ReviewsController(AlbumsDbContext db)
		{
			_db = db;
		}
		
		[HttpGet("{id}")]
		public ActionResult<Review> Get(int id)
		{
			return _db.Reviews.Find(id);
		}
	}
}
