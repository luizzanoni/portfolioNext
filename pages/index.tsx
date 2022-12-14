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
          Desenvolvedor Full-Stack morando em SC/Brasil!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Luiz Gustavo Zanoni
            </Heading>
            <p>Python, HTML, CSS, dotNET, JavaScript, React, NEXT.JS, PL/SQL, ASP.NET Core, MVC</p>
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
            Quem sou eu?
          </Heading>
          <Paragraph>
          <br></br>
          Nascido em:<br></br>
          27 de Janeiro de 2000<br></br>
          <br></br>
          Email:<br></br>
          dev.luizzanoni@gmail.com<br></br>
          <br></br>
          Entusiasmado por tecnologia e inovação, iniciei o mundo da programação em Python e desenvolvendo aplicações para facilitar o dia-a-dia.
          Com o passar do tempo comecei a estudar Javascript e Typescript, atualmente atuo desenvolvendo interfaces como Back-End 
          utilizando C# e MVC, avançando aos poucos como programador FullStack.<br></br>
          <br></br>
          Meu perfil:<br></br>
          Considero-me uma pessoa proativa com fome de conhecimento, sempre buscando melhorar meu nível técnico e pessoal, sou apaixonado por ensinar, 
          então, no que eu puder ajudar alguém, mesmo que seja pouco, já fico extramente feliz.
          </Paragraph>
          <Box align="center" my={4}>
            {/* <NextLink href={AppRoutes.PROJECTS}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="orange">
                Projetos
              </Button>
            </NextLink> */}
          </Box>
        </Section>

        {/* Meus Cursos */}

        <Section delay={0.2}>
          <Heading as="h2" variant="section-title">
            Cursos
          </Heading>

          <BioSection>
            <BioYear>Montagem e Manutenção de Computadores</BioYear>
            <br></br>Janeiro 2013 - Junho 2013
            <br></br>Montagem e manutenção básica em computadores e impressoras.
          </BioSection>

          <BioSection>
            <BioYear>Programação Básica</BioYear>
            <br></br>Janeiro 2014 - Dezembro 2014
            <br></br>Neste curso aprendi estruturas de dados, laços, lógica de programação com C e Java, regras de negócios, UML e requisitos funcionais.
          </BioSection>
		  
		  <BioSection>
            <BioYear>ASP.NET MVC 5 e dotNet (CODE21)</BioYear>
            <br></br>Setembro 2022 - 40 Horas
            <br></br>Neste curso aprendi como funciona a estrutura do MVC e também aprofundado meu conhecimento em dotNET.
          </BioSection>

          <BioSection>
            <BioYear>Ciências da Computação - UFFS</BioYear>
            <br></br>Julho 2020 - Presente
            <br></br>Bacharel em Ciências da Computação pela Universidade Federal da Fronteira Sul (UFFS)
          </BioSection>
        </Section>

        {/* Meus Trabalhos */}

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Experiências Profissionais
          </Heading>

          <BioSection>
            <BioYear>M8 Sistemas -  Software Developer Full-Stack</BioYear>
              <br></br>Setembro 2022 - Presente
              <br></br>HTML, CSS, dotNET, JavaScript, React, API&apos;s, ASP.NET Core, MVC, jQuery <br></br>
          </BioSection>

          <BioSection>
            <BioYear>Unimed Chapecó</BioYear>
              <br></br>Software Developer
              <br></br>Junho 2020 - Setembro 2022
              <br></br>HTML, CSS, JavaScript, React, API&apos;s
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
              <br></br>Criação de Sistema de Gestão de empresas de pequeno porte, sistema de autenticação.
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
