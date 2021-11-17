import Albums from "./Albums";
import Artists from "./Artists";
import Songs from "./Songs";
import apiActions from "../api/apiActions";
import Album from "./Album";

export default {
    SetupNavBar,
    SetupHeaderEventListeners,
    SetupHome
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
    GetAllArtist();
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

function GetAllArtist(){
    apiActions.getRequest("https://localhost:44313/api/artists/", data => {
        ArtistList = data;
    })
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
            pageContent.innerHTML = Albums.DisplayAlbums(data, ArtistList); // only a placeholder. Need data
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
