import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatForms = () => ({
  data: platforms,
});
export default usePlatForms;
