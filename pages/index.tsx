import type { NextPage } from 'next'

import BlockMemos from '@libs/components/BlockMemos'

// Import the generated Prisma client
import { PrismaClient } from '@prisma/client'
import MainLayout from '@libs/layouts/MainLayout'
import { MemoInterface, MemosInterface } from '@interfaces//memoInterface'
import { useEffect, useState } from 'react'
import LoadingOverlay from '@elements/LoadingOverlay'
const prisma = new PrismaClient()

const Home:NextPage = ( {user}:any, {memos}:MemosInterface ) => {
  const [ isLoading, setIsLoading ] = useState<boolean>(true)

  console.log(memos)
  if (user) {
    console.log(user.email)
  }
  if (memos) {
    const memosSent = memos.filter((memo:MemoInterface) => (memo.sentBy === user.email))
    console.log("Memos sent: ", memosSent)
    const memosAssigned = memos.filter((memo:MemoInterface) => (memo.assignTo === user.email))
    console.log("Memos assigned: ", memosAssigned)
  }
  useEffect(() => {
    if (user) {
        setIsLoading(false)
    }
  }, [user, memos])

  if (isLoading) {
    return (
      <MainLayout>
        <LoadingOverlay/>
      </MainLayout>
    )
  }
  
  return (
    <MainLayout>

      <BlockMemos memos={memos} />
      
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