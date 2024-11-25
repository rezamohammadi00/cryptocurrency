import axiosClient from "./axiosClient.ts";


const fetchCoins = async () => {
    const response = await axiosClient.get('/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=100&offset=0');
    return response.data;
};

export default fetchCoins;