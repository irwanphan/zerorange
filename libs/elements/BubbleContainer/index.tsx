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
            bg='whiteAlpha.700'
            role='group'
            transition='.3s ease all'
            p={8}
            _hover={{
                shadow: 'lg'
            }}
            {...rest}
        >
            {children}
        </Box>
    )
}

export default BubbleContainer