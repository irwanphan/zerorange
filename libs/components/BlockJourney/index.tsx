import { Box, Circle, Text } from "@chakra-ui/react"
import BubbleContainer from "@elements/BubbleContainer"
import IconicTitle from "@elements/IconicTitle"
import PageSection from "@elements/Section"
import { nanoid } from "nanoid"
import { FiGitPullRequest, FiActivity, FiArchive } from "react-icons/fi"

interface BlockJourneyProps {
    id: string | number,
    active: boolean,
    title: string,
    description: string,
    companyName: string,
    startDate: string,
    endDate: null
}
export type BlockJourneyType = {
    works: BlockJourneyProps[]
}

const BlockJourney = ({works}:BlockJourneyType) => {
    return (
        <PageSection>
            <BubbleContainer>
                <IconicTitle icon={FiGitPullRequest} hoverColor='yellow.300'>Hustling Journey</IconicTitle>
                {
                    works.map((item:any) => {
                        return (
                            <Box key={nanoid()}
                                _notLast={{ borderBottom:'1px dashed gray', pb:4, mb:4 }} >
                                <Text fontSize={20} fontWeight={600}>{item.title}</Text>
                                <Text fontWeight={600}
                                    display= 'inline-block'
                                    >{item.companyName}</Text>
                                <Circle as={item.active ? FiActivity : FiArchive} 
                                    borderStyle='solid'
                                    borderColor='gray.800'
                                    borderWidth='1px 2px 3px 1px'
                                    display='inline-block'
                                    size={5} p={0.5}
                                    position='relative' top={1} left={2}
                                    bg={item.active ? { base: 'green.200',  md: 'white' } : 
                                                        { base: 'orange.200', md: 'white' } }
                                    transition='.4s ease all'
                                    _groupHover={item.active ?  { md: {bg: 'green.200'} } :
                                                                { md: {bg: 'orange.200'} } }
                                />
                                <Text fontSize={12} fontWeight={600} color='gray.500' mt={0.5} mb={2}>
                                    {item.startDate} {item.endDate ? `- ${item.endDate}` : '- now'}
                                </Text>
                                <Text>{item.description}</Text>
                            </Box>
                        )
                    })
                }
            </BubbleContainer>
        </PageSection>
    )
}

export default BlockJourney