import { Box, SimpleGrid, Text } from "@chakra-ui/react"
import BubbleContainer from "@elements/BubbleContainer"
import IconicTitle from "@elements/IconicTitle"
import PageSection from "@elements/Section"
import { nanoid } from "nanoid"
import { FiPenTool } from "react-icons/fi"

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

const BlockStudies = ({studies}:BlockStudiesType) => {
    return (
        <PageSection>
            <BubbleContainer>
                <IconicTitle icon={FiPenTool} hoverColor='cyan.300'>Studied Here</IconicTitle>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing='4'>
                    {
                        studies.map((item:any) => {
                            return (
                            <Box mb={4} _last={{ mb: 0 }} key={nanoid()}>
                                <Text fontSize={20} fontWeight={600}>{item.title}</Text>
                                <Text>finished {item.finishDate}, {item.universityName}, {item.city}</Text>
                            </Box>
                            )
                        })
                    }
                </SimpleGrid>
            </BubbleContainer>
      </PageSection>
    )
}

export default BlockStudies