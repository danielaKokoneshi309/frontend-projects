import { Button, Flex} from '@chakra-ui/react';


interface LoadMoreButtonProps {
  onLoadMore: () => void;
}

const LoadMoreButton = ({ onLoadMore }: LoadMoreButtonProps) => {
  return (
<Flex  alignItems="center">

    <Button
      fontSize="medium"
      variant="button"
      onClick={onLoadMore}
      backgroundColor="white"
      color="black"
  marginLeft="40%"
   marginBottom={20}
    >
      Load More
    </Button>
   
    </Flex>
  );
};

export default LoadMoreButton;
