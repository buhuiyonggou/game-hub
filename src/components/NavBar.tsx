import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import MyAnimeList from "../assets/myanimelist.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={MyAnimeList} boxSize="60px" />
      <Text fontSize="2xl" fontWeight="bold">
        Anime List
      </Text>
    </HStack>
  );
};

export default NavBar;
