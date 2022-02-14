
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Skills from '../components/Skills';
import ContactSection from '../components/ContactSection';
import Realty from '../assets/images/realty.png';
import Cheeri from '../assets/images/cheeri.png';
import Contact from '../assets/images/contact-keeper.png';
import Gym from '../assets/images/xsthetix.png';
import profile from '../assets/images/me.png'
import {
  Box,
  Text,
  HStack,
  Flex,
  SimpleGrid,
  Heading,
  Icon,
  Spacer,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { filterProps } from 'framer-motion';
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <main>
        <Heading textAlign='center'>PROJECTS</Heading>
        <Spacer />
        <HStack alignItems='center' justifyContent='center' spacing='10px'>
          <Heading textAlign='center' fontSize='lg' mt='5' textColor='red.400'>
            Here are some projects I've worked on. Find all the rest on my
          </Heading>
        </HStack>
        <SimpleGrid columns={2}>
          <Card
            photo={Realty}
            demoLink={'https://realty-react-e84mqaa6v-mfbernasol.vercel.app/'}
            githubLink={'https://github.com/mfbernasol/realty-react'}
            title='Real Estate Web App'
            desc='View search, and filter through different real estate properties'
            builtWith='NextJS | Real Estate Rapid API | ChakraUI'
          />
          <Card
            photo={Cheeri}
            title='Message Board'
            desc='A message board similar to twitter. Users can submit messages and view their messages in a public feed'
            builtWith='React | Node/Express.js | MongoDB | TailwindCSS'
          />
          <Card
            photo={Contact}
            demoLink='https://sheltered-citadel-24897.herokuapp.com/'
            githubLink={'https://github.com/mfbernasol/contact-keeper-react'}
            title='Contact Keeper'
            desc='Web app where can users to sign-up to create and save their contacts info'
            builtWith='React | Context API | Express.js | JWT | MongoDB'
          />
          <Card
            photo={Gym}
            demoLink='https://hardcore-spence-e68fc0.netlify.app/'
            githubLink={'https://github.com/mfbernasol/contact-keeper-react'}
            title='Personal Trainer Landing Page'
            desc="Landing page that's currently being developed for a client's personal training business"
            builtWith='GatsbyJS | TailwindCSS'
          />
        </SimpleGrid>
      </main>
      <Skills />
      <ContactSection />
    </div>
  );
}
