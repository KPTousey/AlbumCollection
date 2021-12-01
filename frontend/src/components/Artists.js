import Artist from "./Artist";
import apiActions from "../api/apiActions"

const pageContent = document.getElementById('pageContent');
const title = document.getElementById('title');

export default {
DisplayArtists,
SetupAddArtist,
SetupDeleteButton,
SetupArtistLinks
}



 
function DisplayArtists(artists) {
    return `
        <section class='addArtists'>
            <label><strong>Name:</strong></label>
            <input type='text' id='artistName' placeholder='Enter artist name' />
            <button id='btnAddArtist'>Add Artist</button>
        </section>
        <h3>Artist List</h3>
        <ol>
            ${artists.map(artist => {
                console.log(artist)
                return `
                    <li>
                        <h4>
                            <span class='artistName'>${artist.name}</span> <button id="${artist.id}" class="artist_delete">Delete</button>
                        </h4>
                    </li>
                `;
            }).join('')}
        </ol>
    `;
}

export function SetupDeleteButton(){
    let artistDeleteButtons = document.querySelectorAll(".artist_delete");

    artistDeleteButtons.forEach(element => {
        element.addEventListener('click', function(){
            let id = element.id;

            apiActions.deleteRequest("https://localhost:44313/api/artists/", id, data => {
               
                pageContent.innerHTML = DisplayArtists(data);
                SetupAddArtist();
                SetupDeleteButton();
            });
        });
    });
}

export function SetupAddArtist(){
    const btnAddArtist = document.getElementById("btnAddArtist");
    btnAddArtist.addEventListener("click", function (){
        //console.log('add artist functionality goes here...');
        const newArtist = {
            Name: document.getElementById("artistName").value
        }

        apiActions.postRequest("https://localhost:44313/api/artists/", newArtist, data => {
            // title.innerText = "Details";
            pageContent.innerHTML = Artist.DisplayArtist(data);
            Artist.SetupEditButton();
          
        });

     });
}

export function SetupArtistLinks() {
    let artistLinks = document.querySelectorAll(".artistName");
    artistLinks.forEach(artistLink => {
        artistLink.addEventListener("click", function(evt){
            let artistId = this.nextElementSibling.id;
            //API Request
            apiActions.getRequest("https://localhost:44313/api/artists/" + artistId, data =>{
                console.log(data);
                pageContent.innerHTML = Artist.DisplayArtist(data);
                Artist.SetupEditButton();
            });
        });
    });
}