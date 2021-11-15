import albums from "./Album"



export default {
DisplayAlbums,
SetupDeleteButton
}

export function DisplayAlbums(albums){


    return `
        <section class='addAlbum'>
            <label><strong>Name:</strong></label>
            <input type='text' id='AlbumName' placeholder='Enter a name for the album' />
            <button id='btnAddAlbum'>Add Album</button>
        </section>
        <ol>
            ${albums.map(album => {
                return `
                    <li>
                        <h4>
                            ${album.name} <button id="${album.id}" class="album_delete">Delete</button>
 
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

export function SetupAddAlbum(){
    const btnAddAlbum = document.getElementById("btnAddAlbum");
    btnAddAlbum.addEventListener("click", function (){
        //console.log('add artist functionality goes here...');
        const newAlbum = {
            Name: document.getElementById("albumName").value
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

