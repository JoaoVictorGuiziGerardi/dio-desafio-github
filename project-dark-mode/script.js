const btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click', mudarModo);

function mudarModo(){
    const span = document.getElementById('txt-modo');
    const spanBtn = document.getElementById('btn-modo');
    const body = document.getElementsByTagName('body')[0];

    body.classList.toggle("dark-mode");

    if(body.classList.contains("dark-mode")){
        span.innerText = "Dark Mode";
        spanBtn.innerText = "Light Mode";
    } else {
        span.innerText = "Light Mode";
        spanBtn.innerText = "Dark Mode";
    }
}