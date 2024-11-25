import axiosClient from "./axiosClient.ts";


export const fetchNews = async () =>{
    const response = await axiosClient.get("/bsc");
    return response.data;
}

