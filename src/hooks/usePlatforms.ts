import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APICLient from "../services/api-cilent";
import ms from "ms";

const apiCilent = new APICLient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatForms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiCilent.getAll,
    staleTime: ms("24h"), //24 hours
    initialData: platforms,
  });

export default usePlatForms;
