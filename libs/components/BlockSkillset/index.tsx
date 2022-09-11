import { Box, Flex, Text } from "@chakra-ui/react"
import BubbleContainer from "@elements/BubbleContainer"
import IconicTitle from "@elements/IconicTitle"
import PageSection from "@elements/Section"
import SkillBadge from "@elements/SkillBadge"
import TextWithIcon from "@elements/TextWithIcon"
import { nanoid } from "nanoid"
import { FiLayers } from "react-icons/fi"
import { TbBrandNextjs } from "react-icons/tb"

const BlockSkillset = () => {
    
    return (
        <PageSection>
            <BubbleContainer>
                <IconicTitle icon={FiLayers} hoverColor='cyan.300'>What I'd Do</IconicTitle>
                <Flex gap={2}>
                    <Box px={4} py={2} mb={2} key={nanoid()}
                        borderRadius='2rem'
                        borderStyle='solid'
                        borderColor='gray.800'
                        borderWidth='1px 2px 3px 1px'>
                        <TextWithIcon icon={TbBrandNextjs}>NextJS</TextWithIcon>
                    </Box>
                </Flex>
            </BubbleContainer>
        </PageSection>
    )
}

export default BlockSkillset