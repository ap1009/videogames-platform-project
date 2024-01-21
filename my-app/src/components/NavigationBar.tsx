import React from "react";
import { BiSearch } from "react-icons/bi";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";

import {
  Box,
  Center,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

interface Props {
  onToggle: () => void;
  toggleState: boolean;
}

const NavigationBar = ({ onToggle, toggleState }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex padding={[2, 4, 4, 6]}>
        <Center id="Logo" width={["15%", "10%", "10%", "10%"]}>
          <Image
            borderRadius="full"
            boxSize={"75px"}
            src="/logo.webp"
            alt="Logo"
          />
        </Center>
        <Center width={["70%", "75%", "75%", "75%"]}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <BiSearch color="gray.300" />
            </InputLeftElement>
            <Input type="text" placeholder="Search games..." />
          </InputGroup>
        </Center>

        {/*
        <Center width={["15%", "20%", "20%", "20%"]} gap={"10px"}>
          {toggleState && (
            <FaToggleOn
              size={"50px"}
              onClick={() => {
                onToggle();
              }}
            />
          )}
          {!toggleState && (
            <FaToggleOff
              size={"50px"}
              onClick={() => {
                onToggle();
              }}
            />
          )}
          <Text fontSize={"lg"}>Dark Mode</Text>
        </Center>

            */}

        <ColorModeSwitch />
      </Flex>
    </>
  );
};

export default NavigationBar;
