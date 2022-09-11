import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import { useState } from 'react'

// import { studies, works, founded } from '@libs/data/journey.json'
import fs from 'fs/promises'
import path from "path"

import SocialAnchorMenu from '@libs/components/SocialAnchorMenu'
import BlockHeader from '@libs/components/BlockHeader'
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
      pb={10}
    >
      <Head>
        <title>Odds are ...</title>
        <meta name="description" content="こんにちわ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SocialAnchorMenu/>

      <BlockHeader />

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