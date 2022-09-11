import { Box, Flex } from "@chakra-ui/react"
import TextWithIcon from "@elements/TextWithIcon"
import { nanoid } from "nanoid"
import { IconType } from "react-icons"
// import { TbBrandNextjs } from "react-icons/tb"

interface SkillBadgeProps {
    icon: IconType,
    text: string,
    color: string,
    textColor: string
}

const SkillBadge = (skill: SkillBadgeProps) => {
    return (
        <Flex gap={2}>
            <Box px={4} py={2} mb={2} key={nanoid()}
                borderRadius='2rem'
                borderStyle='solid'
                borderColor='gray.800'
                borderWidth='1px 2px 3px 1px'>
                <TextWithIcon icon={skill.icon}>
                    {skill.text}
                </TextWithIcon>
            </Box>
        </Flex>
    )
}

export default SkillBadge