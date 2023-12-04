import usePlatforms from "./usePlatforms";

const usePlatForm = (id?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((platform) => platform.id === id);
};

export default usePlatForm;
