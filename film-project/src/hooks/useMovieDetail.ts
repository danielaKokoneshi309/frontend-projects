

import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Movies } from "../types";

const fetchMovie = async (id: string): Promise<Movies> => {
  const response = await apiClient.get('/movie/'+ id);
  
  return response.data;
};

const useMovieDetail = (id: string) => {
  return useQuery<Movies, Error>({
    queryKey: ['movie', id], 
    queryFn: async () =>  await fetchMovie(id), 
   
  });
};

export default useMovieDetail;
