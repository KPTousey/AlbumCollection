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
    public class ArtistsController : ControllerBase
    {
        private AlbumsDbContext _db;
        public ArtistsController(AlbumsDbContext db)
        {
            _db = db;
        }


        [HttpGet]
        public ActionResult<IEnumerable<Artist>> Get()
        {
            return _db.Artists.ToList();
        }

        [HttpPost]
        public ActionResult<List<Artist>> Post([FromBody] Artist artist)
        {
            _db.Artists.Add(artist);
            _db.SaveChanges();

            return _db.Artists.ToList();
        }

        [HttpDelete("{id}")]
        public ActionResult<IEnumerable<Artist>> Delete(int id)
        {
            var artist = _db.Artists.Find(id);
            _db.Artists.Remove(artist);
            _db.SaveChanges();

            return _db.Artists.ToList();
        }
    }
}
