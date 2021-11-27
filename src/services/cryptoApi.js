import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '53238ea354mshcbe10a4354ce6dcp11f932jsn528639b3f8e6'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createReqest = (url) => ({url, headers:cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptos: builder.query({
            query: (count) => createReqest(`/coins?Limit=${count}`),
        })
    })
});

export const { 
    useGetCryptosQuery,
} = cryptoApi;