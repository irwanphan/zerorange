import type { NextPage } from 'next'
import { Box, Circle, Divider, Heading, HStack, Img, Link, SimpleGrid, Text } from '@chakra-ui/react'
import Head from 'next/head'
import PageSection from '@elements/Section'
import { FiActivity, FiArchive, FiDollarSign, FiGitPullRequest, FiHeart, FiLogOut, FiMoreHorizontal, FiPenTool, FiSmile, FiSunrise, FiSunset } from 'react-icons/fi'
import IconicTitle from '@elements/IconicTitle'
import BubbleContainer from '@elements/BubbleContainer'
import SocialAnchorMenu from '@libs/components/SocialAnchorMenu'
import { useState } from 'react'
import { nanoid } from 'nanoid'

// import { studies, works, founded } from '@libs/data/journey.json'
import fs from 'fs/promises'
import path from "path"
import BlockStudies from '@libs/components/BlockStudies'
import BlockJourney from '@libs/components/BlockJourney'
import BlockFounder from '@libs/components/BlockFounder'

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
      <BlockJourney works={works} />
      <BlockFounder founded={founded} />
      
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