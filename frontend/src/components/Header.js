import Albums from "./Albums";
import Artists from "./Artists"
import Album from "./Album";

export default {
    SetupNavBar,
    SetupHeaderEventListeners
}

export function SetupNavBar(){
    return `
    <ul>
        <li id="navHome">Home</li> 
        <li id="navAlbums">Albums</li>
        <li id="navArtists">Artists</li>
        <li id="navSongs">Songs</li>
    </ul>
    `;
}


export function SetupHeaderEventListeners(){
   SetupHome();
   SetupAlbums();
   SetupArtists();
   SetupSongs();
}
function SetupHome(){
    const pageContent = document.getElementById("pageContent")
    const btnHome = document.getElementById("navHome");
    btnHome.addEventListener("click", function(){
     pageContent.innerHTML = `
     <h1>Hello World Productions</h1>
     <p>Welcome to our album collection!</p>
     `
   });
}

function SetupAlbums(){
    const btnAlbums = document.getElementById("navAlbums")
    btnAlbums.addEventListener("click", function(){
        console.log("hello")
        fetch("https://localhost:44313/api/albums")
        .then(response => response.json())
        .then(data =>{
            pageContent.innerHTML = Albums.DisplayAlbums(data); // only a placeholder. Need data
            Albums.SetupAddAlbum();
            Albums.SetupDeleteButton();
        });
    });
}


function SetupArtists() {
    const btnArtists = document.getElementById("navArtists")
    btnArtists.addEventListener("click", function () {
        console.log("this one too")
        fetch("https://localhost:44313/api/artists")
        .then(response => response.json())
        .then(data =>{
            pageContent.innerHTML = Artists.DisplayArtists(data); 
            Artists.SetupAddArtist();
            Artists.SetupDeleteButton();
        });

    });
}


function SetupSongs() {
    const btnArtists = document.getElementById("navSongs")
    btnArtists.addEventListener("click", function () {
        console.log("songs works")
    });
}
