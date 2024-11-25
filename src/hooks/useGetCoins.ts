import {useQuery} from "@tanstack/react-query";
import fetchCoins from "../services/coinrankingApi/coins.ts";


const useGetCoins = () => useQuery({
    queryKey: ["coins"],
    queryFn: fetchCoins,
    staleTime: Infinity, // Data is always fresh, no automatic refetch
    gcTime: Infinity,    // Data is kept in cache indefinitely

    //refetchOnWindowFocus: false, // Prevent refetching when the window is focused
});

export default useGetCoins;