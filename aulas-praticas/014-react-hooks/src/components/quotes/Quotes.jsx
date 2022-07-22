import React from "react";
import styled from 'styled-components';
import { string, func } from 'prop-types';
import { Button } from '../button';

const Quote = styled.p`
    font-size: clamp(14px, 2vw, 24px);
    margin: 0;
`;

const Speaker = styled(Quote)`
    text-align: right;
    margin-bottom: 50px;
    font-size: clamp(10px, 1.5vw, 20px);
    margin-top: 10px;
`;

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;



export const Quotes = ({ quote, speaker, onUpdate = () => {} }) => {
    
    return (
        <Wrapper>
            <Quote>{quote}</Quote>
            <Speaker>- {speaker}</Speaker>
            <Button onClick={onUpdate}>Quote no Jutsu</Button>
        </Wrapper>
    )
};

Quotes.propTypes = {
    quote: string,
    speaker: string,
    onUpdate: func
};