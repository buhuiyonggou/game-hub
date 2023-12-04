import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APICLient from "../services/api-cilent";

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
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    initialData: platforms,
  });

export default usePlatForms;
