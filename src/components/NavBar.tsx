import { HStack, Image } from "@chakra-ui/react";
import MyAnimeList from "../assets/myanimelist.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={MyAnimeList} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
