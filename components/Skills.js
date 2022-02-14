import { Box, Heading, Text, Icon, HStack } from '@chakra-ui/react';
import { HiOutlineMail } from 'react-icons/hi';
import React from 'react';

const Skills = () => {
  return (
    <Box
      textAlign='center'
      p='10'
      m='15'
      color='gray.600'
      borderTop='1px'
      borderColor='gray.100'
    >
      <Heading fontSize='3xl' textColor='red.500'>
       SKILLS
      </Heading>
      <Heading fontSize='3xl' textColor='red.500'>
       ...
      </Heading>
      <HStack alignItems='center' justifyContent='center'>
        <Icon as={HiOutlineMail} boxSize={7} />
        <Text fontSize='2xl'>mfbernasol@gmail.com</Text>
      </HStack>
    </Box>
  );
};

export default Skills;
