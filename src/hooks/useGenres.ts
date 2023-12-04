import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiCilent from "../services/api-cilent";
import { FetchResponse } from "../services/api-cilent";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiCilent.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
