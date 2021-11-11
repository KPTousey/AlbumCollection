export default {
    SetupNavBar,
    SetupHeaderEventListeners
}

export function SetupNavBar(){
    return `
    <ul>
        <li id="navHome">Home</li> 
        <li id="navAlbum">Albums</li>
        <li id="navArtist">Artists</li>
        <li id="navArtist">Songs</li>
        <li id="navArtist">Reviews</li>
    </ul>
    `;
}


export function SetupHeaderEventListeners(){
   SetupHome();
   SetupAlbums();

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
    const btnAlbums = document.getElementById("navAlbum")
    btnAlbums.addEventListener("click", function(){
        console.log("hello")
        fetch("")
        .then(response => response.jason())
        .then(data =>{
            pageContent.innerHTML = Albums.DisplayAlbums(data); // only a placeholder. Need data
        });
    });
}