import { Box, Flex, Text } from "@chakra-ui/react"
import BubbleContainer from "@elements/BubbleContainer"
import IconicTitle from "@elements/IconicTitle"
import PageSection from "@elements/Section"
import SkillBadge, { SkillBadgeProps } from "@elements/SkillBadge"
import { nanoid } from "nanoid"
import { useState } from "react"
import { FiLayers } from "react-icons/fi"

type BlockSkillsetType = {
    skills: SkillBadgeProps[]
} 

const BlockSkillset = ({skills}:any) => {
    const [ bizs, setBizs ] = useState(skills.business)
    const [ devs, setDevs ] = useState(skills.development)
    const [ designs, setDesigns ] = useState(skills.designs)

    return (
        <PageSection>
            <BubbleContainer>
                <IconicTitle icon={FiLayers} hoverColor='green.200'>What I Do</IconicTitle>
                <Box mb={3}>
                    <Text mb={2}>
                        I love working in a team and solving problems. I am proficient with these methods and tools.
                    </Text>
                    <Flex gap={2} wrap='wrap'>
                        {
                            bizs.map((item:any) => (
                                <SkillBadge skill={item} key={nanoid()} />
                            ))
                        }
                    </Flex>
                </Box>
                <Box mb={3}>
                    <Text mb={2}>
                        I love doing development, especially working around UXs and Front End Development. Here are the libs and tools I can work with but not limited - I am willing to learn new stuff.
                    </Text>
                    <Flex gap={2} wrap='wrap'>
                        {
                            devs.map((item:any) => (
                                <SkillBadge skill={item} key={nanoid()} />
                            ))
                        }
                    </Flex>
                </Box>
                <Box>
                    <Text mb={2}>
                        I love creating visual design that is usable, user-friendly and developer-friendly. Here are some technical skills and tools I am good at.
                    </Text>
                    <Flex gap={2} wrap='wrap'>
                        {
                            designs.map((item:any) => (
                                <SkillBadge skill={item} key={nanoid()} />
                            ))
                        }
                    </Flex>
                </Box>
            </BubbleContainer>
        </PageSection>
    )
}

export default BlockSkillset