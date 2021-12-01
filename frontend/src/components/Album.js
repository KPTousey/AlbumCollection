import apiActions from "../api/apiActions";

var Album;

export default {
    DisplayAlbum,
    EditAlbum,
    SetupEditButton
}


const pageContent = document.getElementById('pageContent');
const title = document.getElementById('title');

function DisplayAlbum(album){
    console.log(album);
    Album = album;
    if(album.artists == null){
        album.artists= [];
    }
    if(album.reviews ==null){
        album.reviews=[];
    }
    
    return `
        <h3>${album.title}</h3>
        <img src="${album.imageURL}" alt="">
        <button id="btnEditAlbum">Edit</button>
        <ul>
            ${album.artists.map(album => {
                return `
                    <li>
                        ${album.title}
                    </li>
                `
            }).join('')}
        </ul>
        
        <div id="reviewBox">
            <h3>Reviews</h3>
        <ul>
            ${album.reviews.map(review => {
                return `
                    <li>
                        
                    <h4>Name: ${review.reviewerName}</h4><p>${review.content}</p>
                    </li>
                `
            }).join('')}
        </ul>
        </div>
    `
}


export function EditAlbum(album){
    console.log(album);
    return `
    <h4>Album title</h4>
        <input type="hidden" value='${album.artistId}' id="artist_id" />
        <input type="hidden" value="${album.id}" id="album_id" />
        <input type="text" value="${album.title}" id="album_title" />
      
        ${album.artists.map(album => {
            return `
                <input type="text" value="${album.title}" name="album_albums" id="${album.id}" />
            `
        }).join('')}
        <button id="btnSaveAlbum">Update</button>
    `;
}


export function SetupSaveButton(){
    let btnSave = document.getElementById("btnSaveAlbum");
    btnSave.addEventListener("click", function(){
        let albumId = document.getElementById("album_id").value;
        let albumtitle = document.getElementById("album_title").value;
        let artistId = document.getElementById("artist_id").value;
        const editAlbum = {
            Id: albumId,
            ArtistId: artistId,
            Title: albumtitle
        }
        apiActions.putRequest('https://localhost:44313/api/albums/', albumId, editAlbum, data => {
            pageContent.innerHTML = DisplayAlbum(data);
            SetupEditButton();
        });
    });
}
export function SetupEditButton(){
    let btnEdit = document.getElementById("btnEditAlbum");
    btnEdit.addEventListener("click", function(){
        pageContent.innerHTML = EditAlbum(Album);
        SetupSaveButton();
    });
}


