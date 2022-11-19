import { Box, FlexProps } from "@chakra-ui/react"

interface BubbleContainerProps extends FlexProps {

}

const BubbleContainer = ({children, ...rest}: BubbleContainerProps) => {
    return (
        <Box
            borderRadius='1rem'
            borderStyle='solid'
            borderColor='gray.800'
            borderWidth='1px 2px 3px 1px'
            // bg='whiteAlpha.700'
            bgGradient='linear(to-r, yellow.200, orange.200)'
            role='group'
            transition='.3s ease all'
            p={2}
            _hover={{
                shadow: 'lg'
            }}
            {...rest}
        >
            <Box
                borderRadius='.5rem'
                borderStyle='solid'
                borderTopColor='gray.500'
                borderLeftColor='gray.500'
                borderRightColor='gray.400'
                borderBottomColor='gray.400'
                borderWidth='2px'
                bg='whiteAlpha.900'
                p={6}
            >
                {children}
            </Box>
        </Box>
    )
}

export default BubbleContainer