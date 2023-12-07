import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-cilent";
import Game from "../entities/Game";

const apiCilent = new APIClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiCilent.get(slug),
  });

export default useGame;
