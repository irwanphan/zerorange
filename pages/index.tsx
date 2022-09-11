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
import BlockSkillset from '@libs/components/BlockSkillset'

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

      <BlockSkillset />
      <BlockStudies studies={studies} />
      <BlockJourney works={works} />
      <BlockFounder founded={founded} />
      
    </Box>
  )
}

export async function getStaticProps() {
  const filePathJourney = path.join(process.cwd(), 'libs', 'data', 'journey.json')
  const jsonDataJourney:any = await fs.readFile(filePathJourney)
  const dataJourney = JSON.parse(jsonDataJourney)

  const filePathSkillset = path.join(process.cwd(), 'libs', 'data', 'skillset.json')
  const jsonDataSkillset:any = await fs.readFile(filePathSkillset)
  const dataSkillset = JSON.parse(jsonDataSkillset)
  console.log(dataSkillset)
  return {
    props: {
      collection: dataJourney
    }
  }
}

export default Home