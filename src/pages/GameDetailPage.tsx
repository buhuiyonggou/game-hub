import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Grid, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import Expandable from "../components/Expandable";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenShots from "../components/GameScreenShots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  // set a toggle to show more or less of the description
  if (isLoading) {
    return <Spinner />;
  }

  if (error || !game) {
    throw error;
  }

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <Box>
          <Heading>{game.name}</Heading>
          <Expandable children={game.description_raw} />
          <GameTrailer gameId={game.id} />
        </Box>

        <Box>
          <GameAttributes game={game} />
          <GameScreenShots gameId={game.id} />
        </Box>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
