
import useMovies from "../hooks/useMovies";
import { SimpleGrid, Text, Spinner, Box, Button } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import { MovieQuery } from "../stores/movieStore";

interface MovieGridProps {
  movieQuery: MovieQuery;
}

const MovieGrid = ({ movieQuery }: MovieGridProps) => {
  const {
    movies,
    error,
    loadMore,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
  } = useMovies(movieQuery);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {error && <Text>{error.message}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={5}
        spacing={10}
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </SimpleGrid>
      <Box textAlign="center" mt={4}>
        {isFetchingNextPage ? (
          <Spinner />
        ) : hasNextPage ? (
          <Button onClick={() => loadMore()}>Load More</Button>
        ) : (
          <Text>No more movies to load</Text>
        )}
      </Box>
    </>
  );
};

export default MovieGrid;
