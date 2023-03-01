import type { NextPage } from 'next'

import BlockMemos from '@libs/components/BlockMemos'
import BlockJourney from '@libs/components/BlockJourney'
import BlockFounder from '@libs/components/BlockFounder'
import BlockSkillset from '@libs/components/BlockSkillset'

// Import the generated Prisma client
import { PrismaClient } from '@prisma/client'
import MainLayout from '@libs/layouts/MainLayout'
import { MemoInterface, MemosInterface } from '@interfaces//memoInterface'
const prisma = new PrismaClient()

const Home:NextPage = ( {user}:any, {memos}:MemosInterface ) => {
  console.log(user.email)
  const memosSent = memos.filter((memo:MemoInterface) => (memo.sentBy === user.email))
  console.log("Memos sent: ", memosSent)
  const memosAssigned = memos.filter((memo:MemoInterface) => (memo.assignTo === user.email))
  console.log("Memos assigned: ", memosAssigned)
  return (
    <MainLayout>

      <BlockMemos memos={memos} />
      {/* <BlockSkillset skills={skills} /> */}
      {/* <BlockJourney works={works} /> */}
      {/* <BlockFounder founded={founded} /> */}
      
    </MainLayout>
  )
}

export async function getStaticProps() {
  const memos = await prisma.memo.findMany()
  return {
    props: {
      memos: JSON.parse(JSON.stringify(memos))
    }
  }
}

export default Home