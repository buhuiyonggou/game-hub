import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APICLient from "../services/api-cilent";
import ms from "ms";

const apiCilent = new APICLient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiCilent.getAll,
    staleTime: ms("24h"), //24 hours
    initialData: genres,
  });

export default useGenres;
