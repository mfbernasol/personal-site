import React from 'react';
import Link from 'next/link';

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  Heading,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';

export default function Navbar() {
  const bg = useColorModeValue('white', 'gray.800');
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w='full'
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow='md'
      >
        <Flex alignItems='center' justifyContent='space-between' mx='auto'>
          <Flex>
            <Heading fontSize='xl' fontWeight='bold' ml='2' textColor='red.500'>
              mfb
            </Heading>
          </Flex>
          <HStack display='flex' alignItems='center' spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color='brand.500'
              display={{ base: 'none', md: 'inline-flex' }}
            >
              <Button variant='ghost'>
                <Link href='#projects'>projects</Link>
              </Button>
              <Button variant='ghost'>
                <Link href='#contact'>contact</Link>
              </Button>
            </HStack>
            <Box display={{ base: 'inline-flex', md: 'none' }}>
              <IconButton
                display={{ base: 'flex', md: 'none' }}
                aria-label='Open menu'
                fontSize='20px'
                color={useColorModeValue('gray.800', 'inherit')}
                variant='ghost'
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos='absolute'
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? 'flex' : 'none'}
                flexDirection='column'
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded='sm'
                shadow='sm'
              >
                <CloseButton
                  aria-label='Close menu'
                  onClick={mobileNav.onClose}
                />
                <Button w='full' variant='ghost'>
                  <Link href='#projects'>projects</Link>
                </Button>
                {/* <Button w='full' variant='ghost'>
                <a href='#skills'>skills</a>
                </Button> */}
                <Button w='full' variant='ghost'>
                  <Link href='#contact'>contact</Link>
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}
