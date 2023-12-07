import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-cilent";
import ScreenShot from "../entities/ScreenShot";

const useScreenShots = (gameId: number) => {
  const apiCilent = new APIClient<ScreenShot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiCilent.getAll,
  });
};

export default useScreenShots;
