import Header from "../components/Header";

const HeaderElement = document.getElementById("navbar");

export default() => {
    Helloworld();
    SetHeader();

}

function Helloworld(){
    const app = document.getElementById('app');

    app.innerText = "Hello World";
}

function SetHeader(){
    HeaderElement.innerHTML = Header.Header();
}