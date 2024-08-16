import { List, ListItem, Button, Spinner, Text } from "@chakra-ui/react";
import  useGenres, { Genre } from "../hooks/useGeneres"; 

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: GenreListProps) => {
  const { data, error, isLoading } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return <Text>Error loading genres</Text>;

  return (
    <List>
      {data?.genres.map((genre) => (
        <ListItem key={genre.id} paddingY={5}>
          <Button
            fontSize={"large"}
            variant="link"
            onClick={() => onSelectGenre(genre)}
          >
            {genre.name}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
