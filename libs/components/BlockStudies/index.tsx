import { Box, SimpleGrid, Text } from "@chakra-ui/react"
import BubbleContainer from "@elements/BubbleContainer"
import IconicTitle from "@elements/IconicTitle"
import PageSection from "@elements/Section"
import { nanoid } from "nanoid"
import { FiTrello } from "react-icons/fi"

interface BlockStudiesProps {
    id: string | number,
    title: string,
    universityName: string,
    city: string,
    finishDate: string
}
export type BlockStudiesType = {
    studies: Array<BlockStudiesProps>
}

const BlockStudies = () => {
    return (
        <PageSection>
            <BubbleContainer>
                <IconicTitle icon={FiTrello} hoverColor='blue.200'>Task List</IconicTitle>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing='4'>
                    asdf
                </SimpleGrid>
            </BubbleContainer>
      </PageSection>
    )
}

export default BlockStudies