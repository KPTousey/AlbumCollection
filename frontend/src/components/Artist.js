

var Artist = null;

export default {
    DisplayArtist
}

function DisplayArtist(artist){
    console.log(artist);
    Artist = artist;
    if(artist.albums == null){
        artist.albums = [];
    }
    
    return `
        <h3>${artist.name}</h3>
        <button id="btnEditOwner">Edit</button>
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



