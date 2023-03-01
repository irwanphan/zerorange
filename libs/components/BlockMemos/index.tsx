import { Box, Divider, FlexProps, SimpleGrid, Text } from "@chakra-ui/react"
import BubbleContainer from "@elements/BubbleContainer"
import IconicTitle from "@elements/IconicTitle"
import PageSection from "@elements/Section"
import { nanoid } from "nanoid"
import { FiTrello } from "react-icons/fi"
import axios from "axios"
import StickyMemo from "@units/StickyMemo"
import { MemosInterface } from "@interfaces//memoInterface"

const BlockMemos = ( {memos}:MemosInterface ) => {
    // const addTask = (data:TaskProps) => axios.post('/api/memos', data)

    return (
        <PageSection>
            <BubbleContainer>
                <IconicTitle icon={FiTrello} hoverColor='blue.200'>Memo List</IconicTitle>
                <Text fontWeight={600} mb={3}>Sent</Text>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing='4'>
                    {
                        memos.map((memo) => {
                            return (
                                <StickyMemo memo={memo} key={memo.id} />
                            )
                        })
                    }
                    {/* {memos[0].title} */}
                </SimpleGrid>
            </BubbleContainer>
      </PageSection>
    )
}

export default BlockMemos