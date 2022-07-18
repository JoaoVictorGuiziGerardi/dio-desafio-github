const BASE_URL = 'https://api.thecatapi.com/v1/images/search/';
const btn = document.getElementById('change-cat');

const pegarGatos = async () => {
    try{
        const data = await fetch(BASE_URL);
        const json = await data.json();
        const url = json[0].url;
        console.log(url);
        return url;
    } catch(e){
        console.log(e.message);
    }
}

const carregarImg = async () => {
    const img = document.getElementById('cat');
    img.src = await pegarGatos();
}

carregarImg();

btn.addEventListener('click', carregarImg);

