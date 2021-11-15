import Artist from "./Artist";

export default {
DisplayArtists,
SetupAddArtist,
SetupDeleteButton
}


const pageContent = document.getElementById('pageContent');
const title = document.getElementById('title');
 
function DisplayArtists(artists) {
    return `
        <section class='addArtists'>
            <label><strong>Name:</strong></label>
            <input type='text' id='ArtistName' placeholder='Enter a name for the artist' />
            <button id='btnAddArtist'>Add Artist</button>
        </section>
        <ol>
            ${artists.map(artist => {
                return `
                    <li>
                        <h4>
                            ${artist.name} <button id="${artist.id}" class="artist_delete">Delete</button>
                        </h4>
                    </li>
                `;
            }).join('')}
        </ol>
    `;
}

export function SetupDeleteButton(){
    let artistDeleteButtons = document.querySelectorAll(".artist_delete");

    fetch("https://localhost:44313/api/artists/" + id, {
                method: "DELETE",
                headers: {
                    "Content-Type" : "application/json"
                }
            })
            .then(response => response.json())
            .then(data =>
            {
                pageContent.innerHTML = DisplayArtists(data);
                SetupAddArtist();
                SetupDeleteButton();
            });

    artistDeleteButtons.forEach(element => {
        element.addEventListener('click', function(){
            let id = element.id;}
        )
    });
}



export function SetupAddArtist(){
    const btnAddArtist = document.getElementById("btnAddArtist");
    btnAddArtist.addEventListener("click", function (){
        //console.log('add artist functionality goes here...');
        const newArtist = {
            Name: document.getElementById("artistName").value
        }

        fetch('https://localhost:44313/api/artists', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newArtist)
        })
        .then(response => response.json())
        .then(data => {
            title.innerText = "Owner Details";
            pageContent.innerHTML = Owner.DisplayOwner(data);
            Artist.SetupEditButton();
        })
        .catch(err => console.log(err));

    });
}