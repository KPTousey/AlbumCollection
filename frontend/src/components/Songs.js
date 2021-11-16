import apiActions from "../api/apiActions"

export default {
DisplaySongs
}


const pageContent = document.getElementById('pageContent');
const title = document.getElementById('title');
 
function DisplaySongs(songs) {
    return `
        <section class='addSongs'>
            <label><strong>Name:</strong></label>
            <input type='text' id='songName' placeholder='Enter song name' />
        </section>
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
