import { create } from 'zustand';

interface Genre {
  id: number;
  name: string;
}

export interface MovieQuery {
  searchText?: string;
  genreId?: number;
}

interface StoreState {
  movieQuery: MovieQuery;
  handleSearch: (searchText: string) => void;
  handleSelectGenre: (genre: Genre) => void;
}

const useStore = create<StoreState>((set) => ({
  movieQuery: {
    searchText: "",
    genreId: 0,
  },
  handleSearch: (searchText: string) => set((state) => ({
    movieQuery: { ...state.movieQuery, searchText, genreId: undefined },
  })),
  handleSelectGenre: (genre: Genre) => set((state) => ({
    movieQuery: { ...state.movieQuery, genreId: genre.id, searchText: undefined },
  })),
}));

export default useStore;
