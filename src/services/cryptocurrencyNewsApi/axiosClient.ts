import axios from "axios"


const axiosClient = axios.create({
    baseURL: "https://cryptocurrency-news2.p.rapidapi.com/v1",
    headers: {
        'x-rapidapi-key': '868dbbf068msh625b1fc664832abp10cd36jsn26e42a1c6346',
        'x-rapidapi-host': 'cryptocurrency-news2.p.rapidapi.com'
    }
});

export default axiosClient
