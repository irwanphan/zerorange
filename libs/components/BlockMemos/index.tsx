import { Box, FlexProps, SimpleGrid, Text } from "@chakra-ui/react"
import BubbleContainer from "@elements/BubbleContainer"
import IconicTitle from "@elements/IconicTitle"
import PageSection from "@elements/Section"
import { nanoid } from "nanoid"
import { FiTrello } from "react-icons/fi"
import axios from "axios"

export interface MemoProps extends FlexProps {
    id          : string
    image?      : string
    title       : string
    description : string
    sentBy      : string
    assignedTo  : string
    price?      : number
    createdAt   : Date
    updatedAt   : Date
}
export type MemoTypes = {
    memos       : MemoProps[]
}

const BlockMemos = ( {memos}:MemoTypes ) => {

    // const addTask = (data:TaskProps) => axios.post('/api/memos', data);

    return (
        <PageSection>
            <BubbleContainer>
                <IconicTitle icon={FiTrello} hoverColor='blue.200'>Memo List</IconicTitle>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing='4'>
                    {/* {memos[0].title} */}
                </SimpleGrid>
            </BubbleContainer>
      </PageSection>
    )
}

export default BlockMemos