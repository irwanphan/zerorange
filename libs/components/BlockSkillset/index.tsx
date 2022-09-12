import { Box, Flex, Text } from "@chakra-ui/react"
import BubbleContainer from "@elements/BubbleContainer"
import IconicTitle from "@elements/IconicTitle"
import PageSection from "@elements/Section"
import SkillBadge, { SkillBadgeProps } from "@elements/SkillBadge"
import { nanoid } from "nanoid"
import { FiLayers } from "react-icons/fi"

type BlockSkillsetType = {
    skills: SkillBadgeProps[]
} 

const BlockSkillset = ({skills}:BlockSkillsetType) => {
    return (
        <PageSection>
            <BubbleContainer>
                <IconicTitle icon={FiLayers} hoverColor='green.200'>What I Do</IconicTitle>
                <Box mb={2}>
                    I love working in a team and solving problems. I am proficient with these methods and tools.
                </Box>
                <Flex gap={2} wrap='wrap'>
                    {/* {
                        skills.map((item:any) => (
                            <SkillBadge skill={item} key={nanoid()} />
                        ))
                    } */}
                </Flex>
                <Box mb={2}>
                    I love doing development, especially working around UXs and Front End Development.
                </Box>
                <Flex gap={2} wrap='wrap' mb={2}>
                    {
                        skills.map((item:any) => (
                            <SkillBadge skill={item} key={nanoid()} />
                        ))
                    }
                </Flex>
            </BubbleContainer>
        </PageSection>
    )
}

export default BlockSkillset