

import { Movies } from '../types'
import { Link as RouterLink } from 'react-router-dom'
import { Badge,Card, CardBody, HStack, Heading, Image ,Link as ChakraLink,Text, Button} from '@chakra-ui/react'
import useFavoriteStore from '../stores/favouriteStore'
import { BsCart, BsHeart, BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";

import useCartStore from '../stores/addToCartStore';
import { useState } from 'react';
import CartModal from '../pages/AddToCart';

interface Props{
    movie:Movies
}

const MovieCard = ({movie}:Props) => {
    let scoreColor = movie.vote_average > 7 ?'green': movie.vote_average > 6 ? 'yellow' :'';
  
    const { addFavorite, favoriteMovies } = useFavoriteStore();
   
    const [isCartOpen, setCartOpen] = useState(false);
   
    const { addCartItem } = useCartStore();

    const handleAddToCart = () => {
      addCartItem(movie);
      setCartOpen(true); 
    };
    const isFavorite = favoriteMovies.some(favMovie => favMovie.id === movie.id);

    
    const heartIcon = isFavorite ? <BsSuitHeartFill /> : <BsHeart />;
  return (
    
    <Card borderRadius={10} overflow={'hidden'} _hover={{ 
      transform: 'scale(1.03)', 
      boxShadow: '0px 7px 5px grey' 
    }}   margin={3}>
       
        <Image src={"https://image.tmdb.org/t/p/w300/"+movie.poster_path} height={300}/>
        
        <CardBody>
            <Heading fontSize={'2xl'}>
            <ChakraLink   as={RouterLink} to ={'/movies/'+ movie.id}>
            <Text>{movie.title}</Text>
            </ChakraLink>
              </Heading>
            <HStack justifyContent={'space-between'}>
        
         <Text>{movie.release_date}</Text>
          
         <Badge colorScheme={scoreColor} fontSize={'1xl'} borderRadius='4px'>{movie.vote_average.toFixed(1)}</Badge>
         </HStack>
         <HStack justifyContent={'space-between'}>
         <Button mt={2} onClick={() => addFavorite(movie)} > <ChakraLink as={RouterLink} to ={'/movies/'+ movie.id+'/favorite/'}  children={heartIcon}> 
            
         </ChakraLink>
          </Button> 
          <Button mt={2}  onClick={handleAddToCart}>
              <BsCart />
            </Button>

         </HStack>
        </CardBody>
        <CartModal isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </Card>
    
    
  

  )
}

export default MovieCard