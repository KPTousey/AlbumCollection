import Album from "./Album";
import apiActions from "../api/apiActions"
import Header from "./Header";

export default {
DisplayAlbums,
SetupDeleteButton,
SetupAddAlbum,
SetupAlbumLinks
}

const pageContent = document.getElementById('pageContent');
const title = document.getElementById('title');

function DisplayAlbums(albums){



return `
        <div class ="custom-select" style="width:200px;">
        <section class='addAlbums'>
        <select id="ArtistId">
        
        </select>
        </div>
            <label><strong>Name:</strong></label>
            <input type='text' id='AlbumName' placeholder='Enter a name for the album' />
            <button id='btnAddAlbum'>Add Album</button>
        </section>
        <ol>
            ${albums.map(album => {
                console.log(album)
                return `
                    <li>
                        <h4>
                           <span class = 'albumName'> ${album.title} </span><button id="${album.id}" class="album_delete">Delete</button>

                        </h4>
                    </li>
                `;
            }).join('')}
        </ol>
    `;

}

export function SetupDeleteButton(){
    let albumDeleteButtons = document.querySelectorAll(".album_delete");

    albumDeleteButtons.forEach(element => {
        element.addEventListener('click', function(){
            let id = element.id;

            apiActions.deleteRequest("https://localhost:44313/api/albums/", id, data => {
               console.log("delete successful");
               console.log(data);
                pageContent.innerHTML = DisplayAlbums(data);
                Header.GetAllArtists(); // figure out how to call GetAllArtsists
                SetupAddAlbum();
            });
        });
    });
}


export function SetupAddAlbum(){
    const btnAddAlbum = document.getElementById("btnAddAlbum");
    btnAddAlbum.addEventListener("click", function (){
        //console.log('add artist functionality goes here...');
        const newAlbum = {
            Title: document.getElementById("AlbumName").value,
            ArtistId: document.getElementById("ArtistId").value
        }

        apiActions.postRequest("https://localhost:44313/api/albums/", newAlbum, data => {

            pageContent.innerHTML = Album.DisplayAlbum(data);
            Album.SetupEditButton();
          
        });
    });
}

export function SetupAlbumLinks() {
    let albumLinks = document.querySelectorAll(".albumName");
    albumLinks.forEach(albumLink => {
        albumLink.addEventListener("click", function(evt){
            let albumId = this.nextElementSibling.id;
            //API Request
            apiActions.getRequest("https://localhost:44313/api/albums/" + albumId, data =>{
                console.log(data);
                pageContent.innerHTML = Album.DisplayAlbum(data);
                Album.SetupEditButton();
            });
        });
    });
}


