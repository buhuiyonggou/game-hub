import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-cilent";
import Trailer from "../entities/Trailer";

const useTrailers = (gameId: number) => {
  const apiCilent = new APIClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ["tailers", gameId],
    queryFn: apiCilent.getAll,
  });
};

export default useTrailers;
