import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APICLient from "../services/api-cilent";

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
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    initialData: { count: genres.length, results: genres, next: null },
  });

export default useGenres;
