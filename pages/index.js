import Head from 'next/head';
import Image from 'next/image';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Card from '../components/Card';
import {
  Box,Text, Flex, Heading
} from '@chakra-ui/react'
import { filterProps } from 'framer-motion';
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <main >
        <Heading textAlign='center'>PROJECTS</Heading>
        <Card/>

      </main>

    </div>
  );
}
