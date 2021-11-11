export default() => {
    Helloworld();
}

function Helloworld(){
    const app = document.getElementById('app');

    app.innerText = "Hello World";
}