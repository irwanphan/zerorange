import type { NextPage } from 'next'

import BlockMemos from '@libs/components/BlockMemos'

// Import the generated Prisma client
import MainLayout from '@libs/layouts/MainLayout'
import { MemoInterface } from '@interfaces//memoInterface'
import { useEffect, useState } from 'react'
import LoadingOverlay from '@elements/LoadingOverlay'
import { useFetchMemos } from '@hooks/useFetchMemos'
import { useFetchAllMemos } from '@hooks/useFetchAllMemos'

const Home:NextPage = ( {user}:any ) => {
  const [ isLoading, setIsLoading ] = useState<boolean>(true)
  const { memos, isLoadingMemos } = useFetchAllMemos()

  if (user) {
    console.log(user.id)
  }
  if (!isLoadingMemos) {
    const memosSent = memos?.filter((memo:MemoInterface) => (memo.sentBy === user.email))
    console.log("Memos sent: ", memosSent)
    const memosAssigned = memos?.filter((memo:MemoInterface) => (memo.assignTo === user.email))
    console.log("Memos assigned: ", memosAssigned)
  }
  useEffect(() => {
    if (user) {
      if (!isLoadingMemos) {
        setIsLoading(false)
      }
    }
  }, [user, isLoadingMemos])

  if (isLoading) {
    return (
      <MainLayout>
        <LoadingOverlay/>
      </MainLayout>
    )
  }
  
  return (
    <MainLayout>

      <BlockMemos memos={memos!} />
      
    </MainLayout>
  )
}

export default Home