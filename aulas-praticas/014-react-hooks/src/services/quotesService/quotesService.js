import React from 'react';

export const getQuote = async () => {
    try{
        const data = await fetch('https://animechan.vercel.app/api/random', {mode: 'cors'});
        const json = await data.json();
        return json;
    } catch (err) {
        console.log('erro', err)
    }
};
