const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const btn = document.getElementById('change-cat');

const pegarGatos = async () => {
    try{
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.webpurl;
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

