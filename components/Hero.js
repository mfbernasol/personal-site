import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  Button,
  HStack,
  Heading
} from "@chakra-ui/react";
import {FaGithub, FaLinkedin} from 'react-icons/fa'
export default function Hero(){
  return (
    <Flex px={4} py={20} mx="auto" >
      <Box w="full" mx="auto" w={{ lg: 8 / 12, xl: 5 / 12 }}>

        <Heading
          mb={3}
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="bold"
          lineHeight="shorter"
          textAlign='center'
          color={useColorModeValue("red.500", "white")}
        >
          Hi, I'm Michael  Bernasol
        </Heading>
        <Heading textAlign='center'>A Software Developer</Heading>
        <chakra.p mb={5} mt={5} color="gray.600" fontWeight='bolder' fontSize={{ md: "lg" }}>
          I am a recent graduate with a degree in Computer Science. My interests include software engineering, full-stack development and web technologies. I'm passionate about continuous learning and challenging myself in the world of tech.
        </chakra.p>
        <HStack>
          <Button
            as="a"
            w={{ base: "full", sm: "auto" }}
            mb={{ base: 2, sm: 0 }}
            size="lg"
            cursor="pointer"
          >
           resume
          </Button>
          <FaGithub size={30}/>
          <FaLinkedin size={30}/>
        </HStack>
      </Box>
    </Flex>
  );
};
