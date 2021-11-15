import Header from "../components/Header";
const headerElement = document.getElementById("navbar");

import Albums from "../components/Albums";


export default() => {
    SetupHeader();
}

function SetupHeader(){
    
    headerElement.innerHTML = Header.SetupNavBar();
    Header.SetupHeaderEventListeners();
}

