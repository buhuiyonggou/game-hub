import useTrailer from "../hooks/useTrailers";
import { Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailer(gameId);
  console.log(data);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    throw error;
  }

  const first = data?.results[0];

  return first ? (
    <video src={first?.data["max"]} poster={first.preview} controls />
  ) : null;
};

export default GameTrailer;
