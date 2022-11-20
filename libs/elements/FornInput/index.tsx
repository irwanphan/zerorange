import { Box, FlexProps, FormLabel, Input } from "@chakra-ui/react"

interface FormInputProps extends FlexProps {
    label? : string
    type? : string
}

const FormInput = ({label, type, children, ...rest}:FormInputProps) => {
    return (
        <Box {...rest}>
            <FormLabel
                position='relative'
                display='inline-block'
                fontSize={14}
                px={2}
                textTransform='capitalize'
            >
                {label}
            </FormLabel>
            <Input type='text'
                borderStyle='solid'
                borderColor='gray.900'
                borderTopWidth='1px'
                borderLeftWidth='1px'
                borderRightWidth='2px'
                borderBottomWidth='2px'
                borderRadius='.25rem'
                background='whiteAlpha.900'
                transition='.3s ease all'
                bgGradient='linear(to-r, whiteAlpha.900 70%, yellow.300)'
                bgSize='128%'
                shadow='md'
                px={2}
                _hover={{
                    borderColor:'gray.900',
                    bgSize:'100%',
                    shadow:'lg'
                }}
                _focus={{
                    borderColor:'gray.900',
                    bgSize:'100%'
                }}
            />
        </Box>
    )
}

export default FormInput