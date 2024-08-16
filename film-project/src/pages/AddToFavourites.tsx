
import { SimpleGrid, GridItem,Text, Image, Badge, Box, Button } from '@chakra-ui/react';
import useFavoriteStore from '../stores/favouriteStore';
import { Link } from 'react-router-dom';
import { BsHeartFill, BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';

const AddToFavouritePage = () => {
  const { favoriteMovies,removeFavorite } = useFavoriteStore();

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={5}
        spacing={10}>
      {favoriteMovies.map(movie => (
        <GridItem key={movie.id} borderWidth={1} borderRadius="lg" overflow="hidden">
          <Image src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                {movie.vote_average.toFixed(1)}
              </Badge>
            </Box>
            <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
              <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
            </Box>
            <Text>{movie.release_date}</Text>
            
            <Button as="button" mt={2} onClick={() => removeFavorite(movie.id)}  >
            <BsHeartFill />
            </Button>
          </Box>
        </GridItem>
      ))}
    </SimpleGrid>
  );
};

export default AddToFavouritePage;
