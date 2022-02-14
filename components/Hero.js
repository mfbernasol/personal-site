import React from 'react';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import NextImage from 'next/image';
import {
  Box,
  useColorModeValue,
  Flex,
  Button,
  HStack,
  Text,
  Heading,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
export default function Hero() {
  return (
    <Flex px={4} py={20} mx='auto'>
      <Box w='full' mx='auto' w={{ lg: 8 / 12, xl: 5 / 12 }}>

          <Heading
            mb={3}
            fontSize={{ base: '3xl', md: '5xl' }}
            fontWeight='bold'
            lineHeight='shorter'
            textAlign='center'
            color={useColorModeValue('red.500', 'white')}
          >
          <Text as='span' color='gray.500'>Hi,</Text> I'm Michael Bernasol
          </Heading>

        <Heading textAlign='center' color='gray.500' fontWeight='bold'>Software Developer.</Heading>
        <Text
          mb={5}
          mt={5}
          ml={10}
          color='gray.600'
          fontWeight='medium'
          fontSize='md'
          textAlign=''
          fontSize={{ md: 'lg' }}
        >
          Recent graduate with a B.S. in Computer Science from Lewis University.
          My interests include software engineering, full-stack development and
          web technologies. Passionate about continuous learning and challenging
          myself in the world of tech.
        </Text>
        <HStack alignItems='center' justifyContent='center'>
          <Button
            as='a'
            w={{ base: 'full', sm: 'auto' }}
            mb={{ base: 2, sm: 0 }}
            size='lg'
            cursor='pointer'
          >
            resume
          </Button>
          <NextLink href='https://github.com/mfbernasol'>
            <Link>
              <FaGithub size={30} />
            </Link>
          </NextLink>
          <NextLink href='https://www.linkedin.com/in/mfbernasol/'>
            <Link>
              <FaLinkedin size={30} />
            </Link>
          </NextLink>
        </HStack>
      </Box>
    </Flex>
  );
}
