import { Box } from "@chakra-ui/react"

const NolGoldDivider = () => {
    return (
        <Box 
            borderRadius='1rem'
            borderStyle='solid'
            borderColor='gray.800'
            borderWidth='1px 2px 3px 1px'
            bgGradient='linear(135deg, yellow.200, whiteAlpha.800 70%, yellow.100 70%, orange.200)'
            transition='.3s ease all'
            h={2.5}
            my={4}
        />
    )
}

export default NolGoldDivider