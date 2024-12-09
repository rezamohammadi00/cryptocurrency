import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://cryptocurrency-news2.p.rapidapi.com/v1",
  headers: {
    "x-rapidapi-key": "e783940c44msh55008ef316a0c8fp18a580jsn322bc9cfe9e1",
    "x-rapidapi-host": "cryptocurrency-news2.p.rapidapi.com",
  },
});

export default axiosClient;
