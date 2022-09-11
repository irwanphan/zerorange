import { Flex, Text } from "@chakra-ui/react"
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
                <IconicTitle icon={FiLayers} hoverColor='cyan.300'>What I'd Do</IconicTitle>
                <Flex gap={2} wrap='wrap'>
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