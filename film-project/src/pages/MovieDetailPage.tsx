import { useParams } from "react-router-dom";
import {
  Heading,
  Text,
  Spinner,
  Center,
  SimpleGrid,
  GridItem,
  Image
} from "@chakra-ui/react";
import useMovieDetail from "../hooks/useMovieDetail";

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();

  console.log(id);

  const { data, error, isLoading } = useMovieDetail(id as string);

  if (isLoading) {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 1 }} spacing={3}>
      {data && (
        <>
        <GridItem>
        <Image src={"https://image.tmdb.org/t/p/w500/"+data.poster_path} height={500} width={500} marginLeft={'30%'}  borderRadius={10} />
        </GridItem>

        <GridItem>
      
          <Heading>{data.title}</Heading>
          <Text>{data.overview}</Text>
        </GridItem>
        </>
      )}
    </SimpleGrid>
  );
};

export default MovieDetail;
