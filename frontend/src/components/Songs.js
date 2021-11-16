import apiActions from "../api/apiActions"

export default {
DisplaySongs
}


const pageContent = document.getElementById('pageContent');
const title = document.getElementById('title');
 
function DisplaySongs(songs) {
    return `
        <h3>Songs List</h3>
        <ol>
            ${songs.map(song => {
                console.log(song)
                return `
                    <li>
                        <h4>
                            <span class='songName'>${song.title}</span> 
                        </h4>
                    </li>
                `;
            }).join('')}
        </ol>
    `;
}
