import type { NextPage } from 'next'
import { Box, Circle, Divider, Heading, HStack, Img, Link, SimpleGrid, Text } from '@chakra-ui/react'
import Head from 'next/head'
import PageSection from '@elements/Section'
import { FiActivity, FiArchive, FiDollarSign, FiGitPullRequest, FiHeart, FiLogOut, FiMoreHorizontal, FiPenTool, FiSmile, FiSunrise, FiSunset } from 'react-icons/fi'
import IconicTitle from '@elements/IconicTitle'
import BubbleContainer from '@elements/BubbleContainer'
import SocialAnchorMenu from '@libs/components/SocialAnchorMenu'
import { nanoid } from 'nanoid'

// import { studies, works, founded } from '@libs/data/journey.json'
import BlockStudies from '@libs/components/BlockStudies'

import fs from 'fs/promises'
import path from "path"
import { useState } from 'react'

const Home: NextPage = ({ collection }: any) => {
  const [ studies, setStudies ] = useState(collection.studies)
  const [ works, setWorks ] = useState(collection.works)
  const [ founded, setFounded ] = useState(collection.founded)

  return (
    <Box
      bgGradient='linear(to-b, cyan.50, blue.600)'
    >
      <Head>
        <title>Odds are ...</title>
        <meta name="description" content="こんにちわ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SocialAnchorMenu/>

      <PageSection py={16}>
        <HStack mx={'auto'} w='max-content'>
          <Circle size={40} overflow='hidden' mr={4}
            borderStyle='solid'
            borderColor='gray.800'
            borderWidth='2px 3px 4px 2px'>
            <Img src='/profile.jpg' />
          </Circle>
          <Box>
            <Heading>Hi, I am Irwan</Heading>
            <Divider my={2}/>
            <Text>I like to learn new things</Text>
            <Text>I am a self starter. I am good at determining what to do to accomplish a defined goal</Text>
          </Box>
        </HStack>
      </PageSection>

      <BlockStudies studies={studies} />

      <PageSection>
        <BubbleContainer>
          <IconicTitle icon={FiGitPullRequest} hoverColor='yellow.300'>Hustling Journey</IconicTitle>
          {
            works.map((item:any) => {
              return (
                <Box key={nanoid()}
                  _notLast={{ borderBottom:'1px dashed gray', pb:4, mb:4 }} >
                  <Text fontSize={20} fontWeight={600}>{item.title}</Text>
                  <Text fontWeight={600}
                    display= 'inline-block'
                  >{item.companyName}</Text>
                  <Circle as={item.active ? FiActivity : FiArchive} 
                    borderStyle='solid'
                    borderColor='gray.800'
                    borderWidth='1px 2px 3px 1px'
                    display='inline-block'
                    size={5} p={0.5}
                    position='relative' top={1} left={2}
                    bg={item.active ? { base: 'green.200',  md: 'white' } : 
                                      { base: 'orange.200', md: 'white' } }
                    transition='.4s ease all'
                    _groupHover={item.active ?  { md: {bg: 'green.200'} } :
                                                { md: {bg: 'orange.200'} } }
                  />
                  <Text fontSize={12} fontWeight={600} color='gray.500' mt={0.5} mb={2}>
                    {item.startDate} {item.endDate ? `- ${item.endDate}` : '- now'}
                  </Text>
                  <Text>{item.description}</Text>
                </Box>
              )
            })
          }
        </BubbleContainer>
      </PageSection>

      <PageSection>
        <BubbleContainer>
          <IconicTitle icon={FiHeart} hoverColor='pink.200'>Founder Journal</IconicTitle>
          {
            founded.map((item:any) => {
              return (
                <Box key={nanoid()}
                  _notLast={{ borderBottom:'1px dashed gray', pb:4, mb:4 }} >
                  <Text fontSize={20} fontWeight={600}
                    display= 'inline-block'
                  >{item.companyName}</Text>
                  <Circle as={item.makeMoney == 'good'    ? FiSunrise : 
                              item.makeMoney == 'medium'  ? FiSmile :
                              item.makeMoney == 'bad'     ? FiSunset :
                                                            FiMoreHorizontal }
                    borderStyle='solid'
                    borderColor='gray.800'
                    borderWidth='1px 2px 3px 1px'
                    display='inline-block'
                    size={6} p={0.5}
                    position='relative' top={1} left={2}
                    bg={item.makeMoney == 'good'    ? { base: 'green.200',  md: 'white' } : 
                        item.makeMoney == 'medium'  ? { base: 'yellow.200', md: 'white' } :
                        item.makeMoney == 'bad'     ? { base: 'red.200',    md: 'white' } :
                                                      { base: 'white',      md: 'white' } }
                    transition='.4s ease all'
                    _groupHover={item.makeMoney == 'good'     ? { md: {bg : 'green.200'} } : 
                                  item.makeMoney == 'medium'   ? { md: {bg : 'yellow.200'} } :
                                  item.makeMoney == 'bad'      ? { md: {bg : 'red.200'} } :
                                                                { md: {bg : 'white'} }}
                  />
                  {
                    !item.active &&
                    <Circle as={FiArchive} 
                      borderStyle='solid'
                      borderColor='gray.800'
                      borderWidth='1px 2px 3px 1px'
                      display='inline-block'
                      size={6} p={0.5}
                      position='relative' top={1} left={2} ml={1}
                      bg={ { base: 'orange.200', md: 'white' } }
                      transition='.4s ease all'
                      _groupHover={ { md: {bg: 'orange.200'} } }
                    />
                  }
                  {
                    item.quit &&
                    <Circle as={FiLogOut} 
                      borderStyle='solid'
                      borderColor='gray.800'
                      borderWidth='1px 2px 3px 1px'
                      display='inline-block'
                      size={6} p={0.5}
                      position='relative' top={1} left={2} ml={1}
                      bg={ { base: 'orange.200', md: 'white' } }
                      transition='.4s ease all'
                      _groupHover={ { md: {bg: 'orange.200'} } }
                    />
                  }
                  {
                    item.exit &&
                    <Circle as={FiDollarSign} 
                      borderStyle='solid'
                      borderColor='gray.800'
                      borderWidth='1px 2px 3px 1px'
                      display='inline-block'
                      size={6} p={0.5}
                      position='relative' top={1} left={2} ml={1}
                      bg={ { base: 'yellow.300', md: 'white' } }
                      transition='.4s ease all'
                      _groupHover={ { md: {bg: 'yellow.300'} } }
                    />
                  }
                  <Text fontSize={12} fontWeight={600} color='gray.500' mb={2}>
                    {item.startDate} {item.endDate ? `- ${item.endDate}` : '- now'}
                  </Text>
                  <Text>{item.description}</Text>
                </Box>
              )
            })
          }
        </BubbleContainer>
      </PageSection>
    </Box>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'libs', 'data', 'journey.json')
  const jsonData:any = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)
  // console.log(data)
  return {
    props: {
      collection: data
    }
  }
}

export default Home