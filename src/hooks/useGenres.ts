import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APICLient from "../services/api-cilent";
import ms from "ms";
import { Genre } from "../entities/Genre";

const apiCilent = new APICLient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiCilent.getAll,
    staleTime: ms("24h"), //24 hours
    initialData: genres,
  });

export default useGenres;
