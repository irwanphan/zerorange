import { Box, FlexProps, FormLabel, Input, Textarea } from "@chakra-ui/react"

interface FormInputProps extends FlexProps {
    label? : string
    type? : string
}

const FormInput = ({label, type, children, ...rest}:FormInputProps) => {

    const FormInputManifest = () => {
        if (type === 'textarea') {
            return (
                <Textarea
                    layerStyle='formInputBase'
                    // border and _hover not working on extend theme
                    borderColor='gray.900'
                    _hover={{ layerStyle: 'formInputHover' }}
                />
            )
        }
        return (
            <Input type='text'
                layerStyle='formInputBase'
                borderColor='gray.900'
                _hover={{ layerStyle: 'formInputHover' }}
            />
        )
    }

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
            <FormInputManifest />
            
        </Box>
    )
}

export default FormInput