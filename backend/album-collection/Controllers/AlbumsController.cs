using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using album_collection.Models;

namespace album_collection.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlbumsController : ControllerBase
    {
        private AlbumsDbContext _db;
        public AlbumsController(AlbumsDbContext db)
        {
            _db = db;
        }


        [HttpGet]
        public ActionResult<IEnumerable<Album>> Get()
        {
            return _db.Albums.ToList();
        }

        [HttpPost]
        public ActionResult<List<Album>> Post([FromBody] Album album)
        {
            _db.Albums.Add(album);
            _db.SaveChanges();

            return _db.Albums.ToList();
        }

        [HttpDelete("{id}")]
        public ActionResult<IEnumerable<Album>> Delete(int id)
        {
            var album = _db.Albums.Find(id);
            _db.Albums.Remove(album);
            _db.SaveChanges();

            return _db.Albums.ToList();
        }
    }
}
