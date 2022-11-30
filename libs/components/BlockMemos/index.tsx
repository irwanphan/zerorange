import { Box, FlexProps, SimpleGrid, Text } from "@chakra-ui/react"
import BubbleContainer from "@elements/BubbleContainer"
import IconicTitle from "@elements/IconicTitle"
import PageSection from "@elements/Section"
import { nanoid } from "nanoid"
import { FiTrello } from "react-icons/fi"
import axios from "axios"
import NextLink from 'next/link'

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
                <SimpleGrid columns={{ base: 2, md: 2 }} spacing='4'>
                    {
                        memos.map((memo) => {
                            return (
                                <NextLink passHref href={`/memos/${memo.id}`}>
                                    <Box key={memo.id}
                                        borderRadius='0.5rem'
                                        borderBottomRightRadius='1.5rem'
                                        borderStyle='solid'
                                        borderColor='gray.800'
                                        borderWidth='1px 2px 3px 1px'
                                        bgGradient='linear(to-r, yellow.200, orange.200)'
                                        role='group'
                                        transition='.3s ease all'
                                        py={2}
                                        px={4}
                                        _hover={{
                                            shadow: 'lg',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <Text
                                            fontWeight={600}
                                            textTransform='capitalize'
                                        >
                                            {memo.title}
                                        </Text>
                                        <Text>
                                            {memo.description}
                                        </Text>
                                        <Text
                                            mt={3}
                                            fontSize={12}
                                        >
                                            from: {memo.sentBy}
                                        </Text>
                                    </Box>
                                </NextLink>
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