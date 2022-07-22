import { useState, useEffect, useRef } from "react";
import React from "react";
import styled from 'styled-components';
import narutoImg from '../../images/naruto.png';
import { Quotes } from "../../components/quotes";
import { getQuote } from '../../services/quotesService';
import jutsuSound from '../../sounds/jutsu.mp3';

const audio = new Audio(jutsuSound);

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
    let isMounted = useRef(true);

    const [ quoteState, setQuoteState ] = useState({
        quote: 'loading quote...',
        character: 'loading character...'
    });

    const onUpdate = async () => {
        const quote = await getQuote();

        if (isMounted.current) {
            audio.play();
            setQuoteState(quote);
        }
    };

    useEffect(() => {
        onUpdate();

        return () => {
            isMounted.current = false;
        };
    }, []);

    return(
        <Container>
                <Quotes quote={quoteState.quote} speaker={quoteState.character} onUpdate={onUpdate}/>
                <NarutoImg src={narutoImg} alt="Naruto com uma Kunai" />          
        </Container>
    );
};
 
export default App;