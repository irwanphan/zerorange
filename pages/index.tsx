import type { NextPage } from 'next'

import BlockTasks, { TaskTypes } from '@libs/components/BlockTasks'
import BlockJourney from '@libs/components/BlockJourney'
import BlockFounder from '@libs/components/BlockFounder'
import BlockSkillset from '@libs/components/BlockSkillset'

// Import the generated Prisma client
import { PrismaClient } from '@prisma/client'
import MainLayout from '@libs/layouts/MainLayout'
const prisma = new PrismaClient()

const Home:NextPage = ( {tasks} : any ) => {

  return (
    <MainLayout>

      <BlockTasks tasks={tasks} />
      {/* <BlockSkillset skills={skills} /> */}
      {/* <BlockJourney works={works} /> */}
      {/* <BlockFounder founded={founded} /> */}
      
    </MainLayout>
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