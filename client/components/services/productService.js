import { request } from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/product';

export const getAll = async () => {
   const result = await request('GET', baseUrl);

   return Object.values(result)
};



export const create = async (productData) =>{
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(productData)
    });

    const result = await  response.json()

    return result;
};
