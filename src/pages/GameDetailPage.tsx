import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
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
      <Heading>{game.name}</Heading>
      <Expandable children={game.description_raw} />
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenShots gameId={game.id} />
    </>
  );
};

export default GameDetailPage;
