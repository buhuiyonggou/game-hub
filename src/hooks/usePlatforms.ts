import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiCilent from "../services/api-cilent";
import { FetchResponse } from "../services/api-cilent";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatForms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiCilent
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatForms;
