import Albums from "./Albums";
import Artists from "./Artists";
import Songs from "./Songs";
import apiActions from "../api/apiActions";

export default {
    SetupNavBar,
    SetupHeaderEventListeners,
    SetupHome,
    GetAllArtists
}

var ArtistList;

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
title.innerText = "";
pageContent.innerHTML = `
     <h1>Hello World Productions</h1>
     <p>Welcome to our album collection!</p>
     `;
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
        apiActions.getRequest("https://localhost:44313/api/albums/", data => {
            pageContent.innerHTML = Albums.DisplayAlbums(data);
            GetAllArtists();
            Albums.SetupAlbumLinks();
            Albums.SetupAddAlbum();
            Albums.SetupDeleteButton();
        });
        
    });
}

function GetAllArtists(){
    let ddlArtists = document.getElementById("ArtistId");

    apiActions.getRequest('https://localhost:44313/api/artists/', artists =>{
        artists.forEach(artist => {
            let option = document.createElement("option");
            option.value = artist.id;
            option.text = artist.name;
            ddlArtists.appendChild(option);
        });
    })
}


function SetupArtists() {
    const btnArtists = document.getElementById("navArtists")
    btnArtists.addEventListener("click", function () {
        console.log("this one too")
      
        apiActions.getRequest('https://localhost:44313/api/artists/', data =>{
            pageContent.innerHTML = Artists.DisplayArtists(data); 
                Artists.SetupArtistLinks();
                Artists.SetupAddArtist();
                Artists.SetupDeleteButton();
        });

    });
}


function SetupSongs() {
    const btnSongs = document.getElementById("navSongs")
    btnSongs.addEventListener("click", function () {
        console.log("songs works")
        apiActions.getRequest("https://localhost:44313/api/songs/", data => {
            pageContent.innerHTML = Songs.DisplaySongs(data);

        });
       
    });
}
