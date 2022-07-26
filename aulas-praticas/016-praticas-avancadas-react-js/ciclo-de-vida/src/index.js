import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorBoundary from './aula-error-boundary/ErrorBoundary';

const main = ReactDOM.createRoot(document.getElementById('root'));
main.render (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
)

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/