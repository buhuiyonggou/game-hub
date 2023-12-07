import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APICLient from "../services/api-cilent";
import ms from "ms";
import { Platform } from "../entities/Platform";

const apiCilent = new APICLient<Platform>("/platforms/lists/parents");

const usePlatForms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiCilent.getAll,
    staleTime: ms("24h"), //24 hours
    initialData: platforms,
  });

export default usePlatForms;
