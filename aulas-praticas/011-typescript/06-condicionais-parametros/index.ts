interface Usuario{
    id: string;
    emaial: string;
}

interface Admin extends Usuario{
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

/*
interface Usuario{
    id: string;
    emaial: string;
    cargo?: 'funcionario' | 'gerente' | 'coordenador' | 'supervisor';
} 

? -> valor que pode ou nao estar definido

*/

function redirecione(usuario: Usuario | Admin){
    if('cargo' in usuario){
        //redirecionar p/ área de administração
    } 

    //redirecionar p/ área de funcionários
}