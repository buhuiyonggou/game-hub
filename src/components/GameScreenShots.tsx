import useScreenShots from "../hooks/useScreenShots";
import { Img, SimpleGrid, Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenShots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenShots(gameId);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    throw error;
  }

  const first = data?.results;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
      {first
        ? first.map((file) => <Img key={file.id} src={file.image}></Img>)
        : null}
    </SimpleGrid>
  );
};

export default GameScreenShots;
