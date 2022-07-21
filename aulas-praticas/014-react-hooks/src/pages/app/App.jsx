import React from "react";
import styled from 'styled-components';
import narutoImg from '../../images/naruto.png';
import { Quotes } from "../../components/quotes";

const Container = styled.div`
    height: 100vh;
    padding: 0 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NarutoImg = styled.img`
    max-width: 50vw;
    align-self: flex-end;
`;

const App = () => {
    return(
        <Container>
                <Quotes quote={"oioioio"} speaker={"joao"}/>
                <NarutoImg src={narutoImg} alt="Naruto com uma Kunai" />          
        </Container>
    );
};
 
export default App;