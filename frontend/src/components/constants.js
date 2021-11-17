import apiActions from "../api/apiActions";

export const Title = document.getElementById("pageTitle")
export const Content = document.getElementById("pageContent")

export const OwnerAPIURL = 'https://localhost:44326/api/owners/';
export const TodoAPIURL = 'https://localhost:44326/api/todos/';

export const GetAllArtists = function() {
    let ddlArtists = document.getElementById("ArtistId");

    apiActions.getRequest()

    ddlArtists.forEach(artist => {
        let option = document.createElement("option");
        option.value = artist.id;
        option.text = artist.name;
        ddlArtists.appendChild(option);
    });

}