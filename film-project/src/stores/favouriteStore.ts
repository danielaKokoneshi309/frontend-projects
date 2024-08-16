import { create } from 'zustand';
import { Movies } from '../types';


const loadFavorites = (): Movies[] => {
  const savedFavorites = localStorage.getItem('favoriteMovies');
  return savedFavorites ? JSON.parse(savedFavorites) : [];
};

const saveFavorites = (favorites: Movies[]) => {
  localStorage.setItem('favoriteMovies', JSON.stringify(favorites));
};

interface FavoriteStore {
  favoriteMovies: Movies[];
  addFavorite: (movie: Movies) => void;
  removeFavorite: (movieId: number) => void;
}

const useFavoriteStore = create<FavoriteStore>((set) => ({
  favoriteMovies: loadFavorites(),
  addFavorite: (movie) => set((state) => {
    const movieExists = state.favoriteMovies.some(favMovie => favMovie.id === movie.id);
    if (!movieExists) {
      const updatedFavorites = [...state.favoriteMovies, movie];
      saveFavorites(updatedFavorites);
      return { favoriteMovies: updatedFavorites };
    }
    return state;
  }),
  removeFavorite: (movieId) => set((state) => {
    const updatedFavorites = state.favoriteMovies.filter(movie => movie.id !== movieId);
    saveFavorites(updatedFavorites);
    return { favoriteMovies: updatedFavorites };
  }),
}));

export default useFavoriteStore;
