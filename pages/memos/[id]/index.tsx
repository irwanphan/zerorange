import BubbleContainer from "@elements/BubbleContainer"
import PageSection from "@elements/Section"
import MainLayout from "@libs/layouts/MainLayout"
import { FiFeather } from "react-icons/fi"
import { Button, Divider, Flex, Text } from "@chakra-ui/react"

import { useRouter } from "next/router"
import prisma from "@libs/connections/prisma"
import { MemoInterface } from "@interfaces//memoInterface"

export async function getStaticPaths() {
    // Get all the memos IDs from the database
    const memos = await prisma.memo.findMany({
        select: { id: true },
    })
    return {
        paths: memos.map(memo => ({
            params: { id: memo.id },
        })),
        // set false to not accept any lazy build
        // true for incremental static generation / lazy build
        fallback: true,
    }
}
export async function getStaticProps({ params }:any) {
    // Get the current memo from the database
    const memo = await prisma.memo.findUnique({
        where: { id: params.id },
    })
    if (memo) {
        return {
            props: JSON.parse(JSON.stringify(memo)),
        }
    }
    return {
        redirect: {
            destination: '/',
            permanent: false,
        },
    }
}

const ViewMemo = (memo:MemoInterface|null = null) => {
    const router = useRouter()
    // console.log(memo)

    // fallback version
    if (router.isFallback) {
        return 'loading...'
    }

    return (
        <MainLayout>
            <PageSection>
                <BubbleContainer
                    title="View Memo"
                    icon={FiFeather}
                >
                    <Text>
                        Sent by: {memo?.sentBy ?? ''}
                    </Text>
                    <Divider />
                    <Text
                        fontWeight={600}
                        textTransform='capitalize'
                        mb={2}
                    >
                        {memo?.title ?? ''}
                    </Text>
                    <Text>
                        {memo?.description ?? ''}
                    </Text>
                </BubbleContainer>
            </PageSection>
        </MainLayout>
    )
}
export default ViewMemo