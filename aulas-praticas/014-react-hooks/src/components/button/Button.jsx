import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const ButtonEst = styled.button`
    background-color: #dc872c;
    color: #fff;
    border: none;
    border-radius: 0;
    font-size: 1.5em;
    padding: 10px 20px;
    font-family: 'New Tegomin', serif;
    cursor: pointer;
    box-shadow: #333 3px 3px;

    &:hover {
        background-color: #a40000;
        box-shadow: #333 1.5px 1.5px;
    }
`;

export const Button = ({ onClick = () => {}, children }) => {
    return (
        <ButtonEst onClick={onClick}>{children}</ButtonEst>
    )
};

Button.propTypes = {
    children: string
};