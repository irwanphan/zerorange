import type { NextPage } from 'next'
import { Box, FlexProps } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import fs from 'fs/promises'
import path from "path"

import BlockHeader from '@libs/components/BlockHeader'
import BlockStudies, { TaskTypes } from '@libs/components/BlockStudies'
import BlockJourney from '@libs/components/BlockJourney'
import BlockFounder from '@libs/components/BlockFounder'
import BlockSkillset from '@libs/components/BlockSkillset'
import CustomHeader from '@libs/components/CustomHeader'
import AnchorMenuNav from '@libs/components/AnchorMenuNav'

// import { initializeApp } from "firebase/app"
// import { getDatabase, ref, onValue, goOffline } from "firebase/database"

// const firebaseConfig = {
//   apiKey: "AIzaSyArY83dqer56hJVOYpHzEeEuZvxdNm-X5c",
//   authDomain: "todoistica.firebaseapp.com",
//   databaseURL: "https://todoistica.firebaseio.com",
//   projectId: "todoistica",
//   storageBucket: "todoistica.appspot.com",
//   messagingSenderId: "91188526003",
//   appId: "1:91188526003:web:6153cd55dad31afbac29c6",
//   measurementId: "G-VR8590R1R2"
// }
// const app = initializeApp(firebaseConfig)
// const database = getDatabase(app);

// Import the generated Prisma client
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const Home:NextPage = ( {tasks} : any ) => {

  // const [ data, setData ] = useState()

  console.log(tasks)

  return (
    <Box
      // bgGradient='linear(to-b, cyan.50, blue.600)'
      bgColor='blue.50'
      pb={10}
    >
      <CustomHeader />

      <AnchorMenuNav/>
      {/* <BlockHeader /> */}

      <BlockStudies tasks={tasks} />
      {/* <BlockSkillset skills={skills} /> */}
      {/* <BlockJourney works={works} /> */}
      {/* <BlockFounder founded={founded} /> */}
      
    </Box>
  )
}

export async function getStaticProps() {
  const tasks = await prisma.task.findMany()
  return {
    props: {
      tasks: JSON.parse(JSON.stringify(tasks))
    }
  }
}

export default Home