import Header from "../components/Header";

const headerElement = document.getElementById("navbar");



export default() => {
    SetupHeader();
}

function SetupHeader(){
    
    headerElement.innerHTML = Header.SetupNavBar();
    Header.SetupHeaderEventListeners();
}

