import Header from "../components/Header";
const headerElement = document.getElementById("navbar");


export default() => {
    // Helloworld();
    SetupHeader();

}

// function Helloworld(){
//     const app = document.getElementById('app');

//     app.innerText = "Hello World";
// }

function SetupHeader(){
    
    headerElement.innerHTML = Header();
}