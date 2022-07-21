import { createGlobalStyle } from 'styled-components';
import fundoImg from '../../images/fundo.jpeg';

export const GlobalStyle = createGlobalStyle`
  body {
    background: url(${fundoImg}) center no-repeat;
    background-size: cover;
    color: #332c36;
    padding: 0;
    margin: 0;
    font-family: 'New Tegomin', serif;
  }
`;