import Artist from "./Artist";

export default {
DisplayArtists,
SetupAddArtist,
SetupDeleteButton
}
 
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
    let ownerDeleteButtons = document.querySelectorAll(".owner_delete");

    ownerDeleteButtons.forEach(element => {
        element.addEventListener('click', function(){
            let id = element.id;
        }
}