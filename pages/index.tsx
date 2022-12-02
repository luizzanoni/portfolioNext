import dynamic from 'next/dynamic';
import React from 'react';
import NextLink from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { IoLogoTwitter, IoLogoGithub, IoLogoWhatsapp, IoLogoInstagram } from 'react-icons/io5';
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

        {/* Exp de cursos */}
        
        <Section delay={0.2}>
          <Heading as="h2" variant="section-title">
            Cursos
          </Heading>
          <BioSection>
            <BioYear>Janeiro 2013 - Junho 2013</BioYear>
            <br></br>Montagem e Manutenção de Computadores.
          </BioSection>
          <BioSection>
            <BioYear>Janeiro 2014 - Dezembro 2014</BioYear>
            <br></br>Programação Básica.
          </BioSection>
          <BioSection>
            <BioYear>Julho 2020 - Presente</BioYear>
            <br></br>Ciências da Computação - UFFS
          </BioSection>
        </Section>


        {/* Minhas Exp Profissionais */}

        <Section delay={0.2}>
          <Heading as="h2" variant="section-title">
          Experiências Profissionais
          </Heading>

          <BioSection>
            <BioYear>M8 Sistemas -- Software Developer Full-Stack</BioYear>
              <br></br>Setembro 2022 - Presente
              <br></br>HTML, CSS, dotNET, JavaScript, React, API's, ASP.NET Core, MVC <br></br>
          </BioSection>

          <BioSection>
            <BioYear>Unimed Chapecó</BioYear>
              <br></br>Software Developer
              <br></br>Junho 2020 - Setembro 2022
              <br></br>HTML, CSS, JavaScript, React, API's
              <br></br>
              <br></br>Assistente de Segurança da Informação
              <br></br>Jun 2021 - Jun 2022
              <br></br>Encarregado de Dados (DPO) substituto. Responsável pela implementação e adequação dos processos e tecnologias para a Lei Geral de Proteção de Dados (LGPD).
              <br></br>
              <br></br>Técnico de suporte em TI
              <br></br>Jun 2020 - May 2021
              <br></br>Dar suporte aos usuários dos computadores e microinformática, atendendo aos chamados, documentando as atividades, mantendo o solicitante informando sobre o andamento da demanda.
          </BioSection>

          <BioSection>
            <BioYear>Freelancer - Web</BioYear>
              <br></br>Março 2020 - Junho 2020
              <br></br>Criação de Sistema de Gestão, sistema de autenticação, Layout e integração com API.
          </BioSection>

        </Section>

        {/* Redes Sociais */}

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
                  @whats.luiz
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.instagram.com/luiz.gzanoni/" target="_blank" rel="noreferrer">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram} />}>
                  @luiz_gzanoni
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
