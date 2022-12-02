import dynamic from 'next/dynamic';
import React from 'react';
import NextLink from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { IoLogoTwitter, IoLogoGithub, IoLogoWhatsapp } from 'react-icons/io5';
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  Icon,
  List,
  ListItem,
  Link,
} from '@chakra-ui/react';

import AppRoutes from '../enums/routes.enum';
const Layout = dynamic(() => import('../components/layouts/article'));
const Section = dynamic(() => import('../components/Section/Section'));
const Paragraph = dynamic(() => import('../components/CustomCoreComponents/Paragraph'));
import { BioSection, BioYear } from '../components/CustomCoreComponents/Bio';

const Home = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} align="center" mb={6}>
          A full-stack developer based in Brazil!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Sourav Singh Rawat
            </Heading>
            <p>Learning-addict, Developer, Designer, and not-so-good singer</p>
          </Box>
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/who-is-dis.jpg"
              alt="Sourav's Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Luiz Gustavo? Who?
          </Heading>
          <Paragraph>
            He likes to devour books every morning and then sing in the evening. Amazingly he figured out that he had a
            crush on computers and electronics when he completely rekked his Dad&apos;s mobile phone by flashing a wrong
            ROM in it (SPOILER: He fixed it later). Born in India, He has a hunger for knowledge and just want to know
            more; interests ranging from History, Biology, and most of all Mathematics. And unfortunately he
            doesn&apos;t use Arch!
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href={AppRoutes.PROJECTS}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="orange">
                Projects
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Experiências Profissionais
          </Heading>

          <BioSection>
            <BioYear>M8 Sistemas -- Software Developer Full-Stack</BioYear>
              Setembro 2022 - Presente
              HTML, CSS, dotNET, JavaScript, React, API's, ASP.NET Core, MVC.
          </BioSection>

          <BioSection>
            <BioYear>Freelancer - Web</BioYear>
              Março 2020 - Junho 2020
          </BioSection>

        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Contatos
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/luizzanoni" target="_blank" rel="noreferrer">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                  @luizzanoni
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/luiz_gzanoni" target="_blank" rel="noreferrer">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter} />}>
                  @luiz_gzanoni
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://wa.me/5549999241385" target="_blank" rel="noreferrer">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoWhatsapp} />}>
                  @whatsapp.luiz
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;
