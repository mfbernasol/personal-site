import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Realty from '../assets/images/realty.png'
import {
  Box,Text, Flex, Heading, Spacer
} from '@chakra-ui/react'
import { filterProps } from 'framer-motion';
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <main >
        <Heading textAlign='center'>PROJECTS</Heading>
        <Spacer/>
        <Heading textAlign='center' fontSize='md' mt='5' textColor='red.400'>Here are some projects I've worked on</Heading>
        <Card photo={Realty} title='Real Estate Web App' desc='View and search through different real estate properties' builtWith='React/NextJS,Real Estate Rapid API, ChakraUI, '/>
      </main>

    </div>
  );
}
