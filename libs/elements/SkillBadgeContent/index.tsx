import { Box, FlexProps, HStack, Icon, Text } from "@chakra-ui/react"
import { ReactNode } from "react"
import { TbBrandReactNative, TbBrandNextjs, TbCircle, TbBrandVue, TbBrandNuxt, TbBrandAngular, TbBrandJavascript } from "react-icons/tb"

interface SkillBadgeContentProps extends FlexProps {
    icon: string
    color?: string
    textColor?: string
    children: ReactNode
}
interface IconMatchedProps extends FlexProps {
    icon: string
    color?: string
}

export const IconMatched = ({icon, color}:IconMatchedProps) => {
    const match:any = {
        "react"     : <TbBrandReactNative />,
        "nextjs"    : <TbBrandNextjs />,
        "vuejs"     : <TbBrandVue />,
        "nuxtjs"    : <TbBrandNuxt />,
        "angular"   : <TbBrandAngular />,
        "js"        : <TbBrandJavascript />,
        "default"   : <TbCircle />
    }
    return (
        <Box fontSize='1.75rem' color={color}
            >
            { match[icon] || match['default'] }
        </Box>
    )
}

const SkillBadgeContent = ({icon, color, textColor, children, ...rest}:SkillBadgeContentProps) => {
    return (
        <Box {...rest}>
            <HStack >
                <IconMatched icon={icon} color={color}/>
                <Text textColor={textColor ?? 'inherit'}>
                    {children}
                </Text>
            </HStack>
        </Box>
    )
}
export default SkillBadgeContent