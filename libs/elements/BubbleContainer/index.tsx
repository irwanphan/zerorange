import { Box, FlexProps } from "@chakra-ui/react"

interface BubbleContainerProps extends FlexProps {

}

const BubbleContainer = ({children, ...rest}: BubbleContainerProps) => {
    return (
        <Box
            borderRadius='2rem'
            borderStyle='solid'
            borderColor='gray.800'
            borderWidth='1px 2px 3px 1px'
            role='group'
            p={8}
            {...rest}
        >
            {children}
        </Box>
    )
}

export default BubbleContainer