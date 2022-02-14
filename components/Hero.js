import React from 'react';
import { Link } from '@chakra-ui/react';
import Image from 'next/image';
import profilePic from '../assets/images/me.png';
import {
  Box,
  useColorModeValue,
  Flex,
  Button,
  HStack,
  VStack,
  Text,
  Icon,
  Heading,
} from '@chakra-ui/react';
import { FaLinkedin } from 'react-icons/fa';
export default function Hero() {
  return (
    <Flex px={4} py={20} mx='auto'>
      <Box  mx='auto' w={{ lg: 8 / 12, xl: 5 / 12 }}>
        <VStack>
          <Image src={profilePic} width='100' height='100' alt='profile'/>
          <Heading
            mb={3}
            fontSize={{ base: '3xl', md: '5xl' }}
            fontWeight='bold'
            lineHeight='shorter'
            textAlign='center'
            color={useColorModeValue('red.500', 'white')}
          >
            <Text as='span' color='gray.600' pr='2'>
              Hi, I&#39;m
            </Text> 
            Michael Bernasol
          </Heading>
        </VStack>

        <Heading textAlign='center' color='gray.600' fontWeight='bold'>
          A Software Developer.
        </Heading>
        <Text
          mb={5}
          mt={5}
          ml={10}
          color='gray.600'
          fontWeight='medium'
          fontSize={{ md: 'lg' }}
        >
          Recently graduated with a B.S. in Computer Science from Lewis
          University. My interests include software engineering, full-stack
          development and web technologies. Passionate about continuous learning
          and challenging myself in the world of tech.
        </Text>
        <HStack alignItems='center' justifyContent='center'>
          <Link>
            <Button
              as='a'
              w={{ base: 'full', sm: 'auto' }}
              mb={{ base: 2, sm: 0 }}
              size='lg'
              cursor='pointer'
            >
              <Link
                href='https://drive.google.com/file/d/1ccGdJEIfOHHN39twmVU4MdG7VajVSHLZ/view?usp=sharing'
                target='_blank'
              >
                resume
              </Link>
            </Button>
          </Link>
          <Link
            href='https://www.linkedin.com/in/mfbernasol/'
            isExternal
            target='_blank'
          >
            <Icon as={FaLinkedin} boxSize={8} />
          </Link>
        </HStack>
      </Box>
    </Flex>
  );
}
