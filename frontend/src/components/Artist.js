import apiActions from "../api/apiActions";

const pageContent = document.getElementById('pageContent');
const title = document.getElementById('title');



var Artist;

export default {
    DisplayArtist,
    EditArtist,
    SetupEditButton
}



function DisplayArtist(artist){
    console.log(artist);
    Artist = artist;
    if(artist.albums == null){
        artist.albums = [];
    }
    
    return `
        <h3>${artist.name}</h3>
        <img src="${artist.imageURL}" alt="">
        <button id="btnEditArtist">Edit</button>
        <h4>Albums</h4>
        <ul>
            ${artist.albums.map(album => {
                return `
                    <li>
                        ${album.title}
                    </li>
                `
            }).join('')}
        </ul>
    `
}


export function EditArtist(artist){
    return `
    <h4>Artist Name</h4>
        <input type="hidden" value="${artist.id}" id="artist_id" />
        <input type="text" value="${artist.name}" id="artist_name" />
        ${artist.albums.map(artist => {
            return `
                <input type="text" value="${artist.title}" name="artist_albums" id="${artist.id}" class="zero" disabled />
            `
        }).join('')}
        <button id="btnSaveArtist">Update</button>
    `;
}


export function SetupSaveButton(){
    let btnSave = document.getElementById("btnSaveArtist");
    btnSave.addEventListener("click", function(){
        let artistId = document.getElementById("artist_id").value;
        let artistName = document.getElementById("artist_name").value;

        const editArtist = {
            Id: artistId,
            Name: artistName
        }
        apiActions.putRequest('https://localhost:44313/api/artists/', artistId, editArtist, data => {
            pageContent.innerHTML = DisplayArtist(data);
            SetupEditButton();
        })
    });
}

export function SetupEditButton(){
    let btnEdit = document.getElementById("btnEditArtist");
    btnEdit.addEventListener("click", function(){
        pageContent.innerHTML = EditArtist(Artist);
        SetupSaveButton();
    });
}


