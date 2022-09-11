import { Box, FlexProps, HStack, Text } from "@chakra-ui/react"
import { ReactNode } from "react"
import { IconType } from "react-icons"

interface TextWithIconProps extends FlexProps {
    icon: IconType
    color?: string
    textColor?: string
    children: ReactNode
}

const TextWithIcon = ({icon, color, textColor, children, ...rest}:TextWithIconProps) => {
    return (
        <Box {...rest}>
            <HStack color={color ?? 'inherit'}>
                <Box as={icon} fontSize='1.75rem' />
                <Text textColor={textColor ?? 'inherit'}>
                    {children}
                </Text>
            </HStack>
        </Box>
    )
}
export default TextWithIcon