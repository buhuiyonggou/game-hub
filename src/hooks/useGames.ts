import { useEffect, useState } from "react";
import apiCilent from "../services/api-cilent";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiCilent
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setErrors(error.message);
      });

    return () => controller.abort();
  }, []);

  return { games, errors };
};

export default useGames;
