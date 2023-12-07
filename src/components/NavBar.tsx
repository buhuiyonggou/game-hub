import { HStack, Image, Text } from "@chakra-ui/react";
import ign from "../assets/ign.jpeg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={ign} boxSize="60px" objectFit="cover" />
        <Text marginLeft={1} fontWeight={"bold"}>
          Home
        </Text>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
