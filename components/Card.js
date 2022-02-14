import Image from 'next/image';
import { Link } from '@chakra-ui/react';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Button,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';

import { FaGithub } from 'react-icons/fa';
export default function Card({
  photo,
  title,
  desc,
  builtWith,
  demoLink,
  githubLink,
}) {
  return (
    <Center py={6} px={6}>
      <Box
        w={{ sm: '100%', md: '540px' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'xl'}
        p={6}
        overflow={'hidden'}
      >
        <Box h={'310px'} bg={'gray.100'} mt={-1} mx={7} mb={6} pos={'relative'}>
          <Image src={photo} alt='image' layout='fill' />
        </Box>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
          >
            {title}
          </Heading>
          <Text color={'gray.500'}>{desc}</Text>
          <HStack>
            <Text color={'gray.600'} fontWeight='bold'>
              Built With:
            </Text>
            <Text fontWeight='medium'>{builtWith}</Text>
          </HStack>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <HStack direction={'column'} spacing={2} fontSize={'sm'}>
            <Link href={demoLink} target='_blank'>
              <Button>View Live Demo</Button>
            </Link>
            <Link href={githubLink} target='_blank'>
              <Button leftIcon={<FaGithub />}>Source Code</Button>
            </Link>
          </HStack>
        </Stack>
      </Box>
    </Center>
    
  );
}
