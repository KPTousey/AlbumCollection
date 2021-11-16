import Album from "./Album";
import apiActions from "../api/apiActions"

export default {

}

export function DisplayAlbums(albums) {
    return `
        <section class='addAlbum'>
            <label><strong>Name:</strong></label>
            <input type='text' id='AlbumName' placeholder='Enter a name for the album' />
            <button id='btnAddOwner'>Add Owner</button>
        </section>
        <ol>
            ${albums.map(album => {
                return `
                    <li>
                        <h4>
                            ${album.title} <button id="${album.id}" class="album_delete">Delete</button>
                        </h4>
                    </li>
                `;
            }).join('')}
        </ol>
    `;

}

export function SetupDeleteButton(){
    let albumDeleteButtons = document.querySelectorAll(".album_delete");

    ownerDeleteButtons.forEach(element => {
        element.addEventListener('click', function(){
            let id = element.id;

            fetch("https://localhost:44313/api/albums/" + id, {
                method: "DELETE",
                headers: {
                    "Content-Type" : "application/json"
                }
            })
            .then(response => response.json())
            .then(data =>
            {
                document.getElementById('pageContent').innerHTML = DisplayAlbums(data);
                SetupAddAlbum();
                SetupDeleteButton();
            });
        });
    });
}

