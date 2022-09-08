import { HStack, Circle, Text, FlexProps, Box } from "@chakra-ui/react"
import { IconType } from "react-icons"
import { FiPenTool } from "react-icons/fi"

interface IconicTitleProps extends FlexProps {
    icon: IconType
    hoverColor: string 
}

const IconicTitle = ({icon, hoverColor, children, ...rest}: IconicTitleProps) => {
    return (
        <Box
            position='absolute'
            top={4}
            role='group'
            {...rest}>
            <HStack>
                <Circle as={icon} 
                    borderStyle='solid'
                    borderColor='gray.800'
                    borderWidth='1px 2px 3px 1px'
                    size={8} p={1}
                    bg='white'
                    position='relative'
                    top={0}
                    transition='.4s ease all'
                    _groupHover={{ 
                        bg: `${hoverColor}`,
                        top: '-1.5'
                    }}
                />
                <Text fontSize={20} fontWeight={700}
                    position='relative' top={-2} letterSpacing={1}>
                    {children}
                </Text>
            </HStack>
        </Box>
    )
}

export default IconicTitle