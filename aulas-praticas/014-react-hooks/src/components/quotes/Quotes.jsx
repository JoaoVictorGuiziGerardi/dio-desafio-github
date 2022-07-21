import React from "react";
import styled from 'styled-components';
import { string } from 'prop-types';

const Quote = styled.p`
    font-size: 2em;
    margin: 0;
`;

const Speaker = styled(Quote)`
    text-align: right;
    margin-bottom: 50px;
`;

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;



export const Quotes = ({ quote, speaker }) => {
    

    return (
        <Wrapper>
            <Quote>{quote}</Quote>
            <Speaker>- {speaker}</Speaker>            
            <button>Quote no Jutsu</button>
        </Wrapper>
    )
};

Quotes.propTypes = {
    quote: string,
    speaker: string
};