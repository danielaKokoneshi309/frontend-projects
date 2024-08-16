import apiClient from '../services/api-client';
import { useQuery } from '@tanstack/react-query';

export interface Genre {
  id: number;
  name: string;
}

interface FetchGenreResponse {
  genres: Genre[];
}

const fetchGenres = async (): Promise<FetchGenreResponse> => {
  const response = await apiClient
  .get<FetchGenreResponse>('/genre/movie/list');
  return response.data;
};

const useGenres = () => useQuery<FetchGenreResponse>({
  queryKey: ['genres'],
  queryFn: fetchGenres,
});

export default useGenres;
