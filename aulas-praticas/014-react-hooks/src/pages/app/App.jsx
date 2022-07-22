import { useState } from "react";
import React from "react";
import styled from 'styled-components';
import narutoImg from '../../images/naruto.png';
import { Quotes } from "../../components/quotes";
import { getQuote } from '../../services/quotesService';

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
    const [ quoteState, setQuoteState ] = useState({
        anime: 'Naruto',
        quote: 'Dattebayo!',
        character: 'Naruto'
    });

    const onUpdate = async () => {
        const quote = await getQuote();
        setQuoteState(quote);
    };

    return(
        <Container>
                <Quotes quote={quoteState.quote} speaker={quoteState.character} onUpdate={onUpdate}/>
                <NarutoImg src={narutoImg} alt="Naruto com uma Kunai" />          
        </Container>
    );
};
 
export default App;