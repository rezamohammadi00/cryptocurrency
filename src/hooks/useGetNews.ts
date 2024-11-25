import {useQuery} from "@tanstack/react-query";
import {fetchNews} from "../services/cryptocurrencyNewsApi/news.ts";


const useGetNews = () => useQuery({
    queryKey: ["news"],
    queryFn: fetchNews,
    staleTime: Infinity,
    gcTime: Infinity,
});


export default useGetNews