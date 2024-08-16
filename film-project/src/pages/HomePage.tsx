
import { Grid, GridItem } from "@chakra-ui/react";
import MovieGrid from '../componets/MovieGrid';
import GenreList from '../componets/GenreList';
import useStore from '../stores/movieStore';

const HomePage = () => {
  const movieQuery = useStore((state) => state.movieQuery);
  const handleSelectGenre = useStore((state) => state.handleSelectGenre);

  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
    >
      <GridItem area="main">
        <MovieGrid movieQuery={movieQuery} />
      </GridItem>
      <GridItem area="aside" padding={5}>
        <GenreList onSelectGenre={handleSelectGenre} />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
