
interface Animal{
    nome: string;
    domestico: boolean;
    tipo: 'terrestre' | 'aquático';
}

/* interface é mais comum
type Animal = {
    nome: string;
    tipo: 'terrestre' | 'aquático';
}
*/

interface Felino extends Animal{
    visaoNoturna: boolean;
}

interface Canino extends Animal{
    porte: 'pequeno' | 'medio' | 'grande'
}

const elefante: Animal = {
    nome: 'Elefante',
    domestico: false,
    //tipo: 'voador', => Erro!
    tipo: 'terrestre',
}

const leao: Felino = {
    nome: 'Leão',
    domestico: false,
    tipo: 'terrestre',
    visaoNoturna: true,
}

type Domestico = Felino | Canino;

const animal: Domestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terrestre'
}