
// import {Button, HStack,Image, Link as ChakraLink} from '@chakra-ui/react'
// import ColorModeSwitch from './ColorModeSwitch'
// import SearchInput from './SearchInput'
// import logo from '../assets/logo.png'
// import useStore from '../stores/movieStore'
// import useFavoriteStore from '../stores/favouriteStore'
// import { Movies } from '../types'
// import { Link as RouterLink } from 'react-router-dom'
// import { BsHeart } from 'react-icons/bs'

// interface Props{
//   movie:Movies
// }
// const NavBar = ({movie}:Props) => {
 
//   const handleSearch = useStore((state) => state.handleSearch);
//   const { addFavorite } = useFavoriteStore();
//   return (
//     <HStack justifyContent={'space-between'} padding={'20px'}>
//       <Image src={logo} boxSize='62px' borderRadius={20} />
//       <SearchInput onSearch={handleSearch}/>
//       <ColorModeSwitch/>
//       <Button mt={2} onClick={() => addFavorite(movie)} > <ChakraLink as={RouterLink} to ={'/movies/'+ movie.id+'/favorite/'}  children={<BsHeart/>}> 
            
//          </ChakraLink> </Button> 
//     </HStack>
//   )
// }

// export default NavBar
import { Button, HStack, Image, Link as ChakraLink, Box } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import logo from '../assets/logo.png';
import useStore from '../stores/movieStore';
import useFavoriteStore from '../stores/favouriteStore';
import { Movies } from '../types';
import { Link as RouterLink } from 'react-router-dom';
import { BsHeart } from 'react-icons/bs';


interface Props {
  movie: Movies; 
}

const NavBar = ({ movie }: Props) => {
  const handleSearch = useStore((state) => state.handleSearch);
  const { addFavorite } = useFavoriteStore();

  const handleAddFavorite = () => {
    if (movie) {
      addFavorite(movie);
    } else {
      console.error('Movie is undefined.');
    }
  };

  return (
    <HStack justifyContent={'space-between'} padding={'20px'}>
      <Image src={logo} boxSize='62px' borderRadius={20} />
      <SearchInput onSearch={handleSearch} />
      <Button mt={2} onClick={handleAddFavorite}>
        <ChakraLink as={RouterLink} to={'/movies/favorite'}>
          <BsHeart />
        </ChakraLink>
      </Button>
      <ColorModeSwitch />
      
       
     
    </HStack>
  );
};

export default NavBar;
