import type { NextPage } from 'next'
import { Box, Circle, Heading, HStack, Img, Link, SimpleGrid, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import PageSection from '@elements/Section'
import { FiGitPullRequest, FiInstagram, FiLinkedin, FiMail, FiMap, FiPenTool } from 'react-icons/fi'
import TextWithIcon from '@elements/TextWithIcon'
import IconicTitle from '@elements/IconicTitle'
import BubbleContainer from '@elements/BubbleContainer'

import { works } from '@libs/data/journey.json'

const Home: NextPage = () => {
  console.log(works)
  return (
    <div>
      <Head>
        <title>Odds are ...</title>
        <meta name="description" content="こんにちわ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageSection>
        <HStack mx={'auto'} w='max-content'>
          <Circle size={40} overflow='hidden' mr={4}
            borderStyle='solid'
            borderColor='gray.800'
            borderWidth='2px 3px 4px 2px'>
            <Img src='/profile.jpg' />
          </Circle>
          <Box>
            <Heading>Hi, I am Irwan</Heading>
            <Text>I like to learn new things</Text>
            <Text>I am a self starter. I am good at determining what to do to accomplish a defined goal</Text>
          </Box>
        </HStack>
      </PageSection>

        {/* <header>
          <PageSection
            bgGradient='linear(to-b, blue.400, blue.500)'
            color='whiteAlpha.900'
          >
            <Box>
              <Text fontSize={'1.5rem'}>Irwan Kurnia Phan</Text>
              <TextWithIcon icon={FiMail}>irwanphan@gmail.com</TextWithIcon>
              <Link href='linkedin.com/in/irwanphan'>
                <TextWithIcon icon={FiLinkedin}>linkedin.com/in/irwanphan</TextWithIcon>
              </Link>
              <Link href='instagram.com/irwanphan'>
                <TextWithIcon icon={FiInstagram}>instagram.com/irwanphan</TextWithIcon>
              </Link>
              <TextWithIcon icon={FiMap}>Pontianak - Jakarta, Indonesia</TextWithIcon>
            </Box>
          </PageSection>

          <PageSection>
            I am a self starter. I am good at determining what to do to accomplish a defined goal. And I believe it is important to continuously learn and grow.
          </PageSection>

        </header>

      */}
        <PageSection>
          <BubbleContainer>
            <IconicTitle icon={FiPenTool} hoverColor='cyan.300'>Studied Here</IconicTitle>
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              spacing='4'>
              <Box>
                <Text fontWeight={600}>Master of Informatics Engineering</Text>
                <small>finished November 2016, Binus University, Jakarta</small>
              </Box>
              <Box>
                <Text fontWeight={600}>Bachelor of Computer Science</Text>
                <small>finished September 2011, Widya Dharma University, Pontianak</small>
              </Box>
            </SimpleGrid>
          </BubbleContainer>
        </PageSection>

        <PageSection>
          <BubbleContainer>
            <IconicTitle icon={FiGitPullRequest} hoverColor='pink.200'>Hustler Mode</IconicTitle>
            {
              works.map((item) => {
                return (
                  <Box mb={4} _last={{ mb: 0 }}>
                    <Text fontSize={20} fontWeight={600}>{item.title}</Text>
                    <Text fontWeight={600}>{item.companyName}</Text>
                    <Text>{item.description}</Text>
                  </Box>
                )
              })
            }
          </BubbleContainer>
        </PageSection>

        {/* <PageSection>
          <BubbleContainer>
            <IconicTitle icon={FiGitPullRequest} hoverColor='pink.200'>Happened So Far</IconicTitle>
            {
              works.map((item) => {
                return (
                  <Box mb={4} _last={{ mb: 0 }}>
                    <Text fontSize={20} fontWeight={600}>{item.title}</Text>
                    <Text fontWeight={600}>{item.companyName}</Text>
                    <Text>{item.description}</Text>
                  </Box>
                )
              })
            }
          </BubbleContainer>
        </PageSection> */}
    </div>
  )
}

export default Home
