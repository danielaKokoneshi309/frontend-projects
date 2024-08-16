import { useInfiniteQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import { MovieQuery } from '../stores/movieStore';
import { Movies } from '../types';

interface FetchMovieResponse {
  results: Movies[];
  page: number;
  total_pages: number;
}


type FetchMoviesParams = {
  queryKey: [string, MovieQuery];
  pageParam?: number;
};


const fetchMovies = async ({ queryKey, pageParam = 1 }: FetchMoviesParams): Promise<FetchMovieResponse> => {
  const [, movieQuery] = queryKey;

  let endpoint = 'movie/now_playing';
  const params: any = { page: pageParam };

  if (movieQuery.genreId) {
    endpoint = 'discover/movie';
    params.with_genres = movieQuery.genreId;
  } else if (movieQuery.searchText) {
    endpoint = 'search/movie';
    params.query = movieQuery.searchText;
  }

  

  const response = await apiClient.get<FetchMovieResponse>(endpoint, { params });
  return response.data;
};

const useMovies = (movieQuery: MovieQuery) => { 

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage
  } = useInfiniteQuery<FetchMovieResponse, Error>({
    queryKey: ['movies', movieQuery] ,
    queryFn:fetchMovies,
    getNextPageParam: (lastPage) => {
     
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      } else {
        return undefined;
      }
    },
    initialPageParam: undefined,  
  });

  const movies = data?.pages.flatMap((page) => page.results) || [];

  return {
    movies,
    error,
    loadMore: fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
  };
};

export default useMovies;
