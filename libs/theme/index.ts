import { ComponentStyleConfig, extendTheme } from "@chakra-ui/react";

const Link: ComponentStyleConfig = {
    baseStyle: {
        _hover: {
            textDecoration: 'none'
        },
        _focus: {
            textDecoration: 'none',
            boxShadow: 'none',
            color: 'purple.800'
        }
    },
}
const Input: ComponentStyleConfig = {
    defaultProps: {
        colorScheme: 'yellow'
    },
    baseStyle: {
        bgColor: 'whiteAlpha.900'
    },
    variants: {
        outline: {
            field: {
                _focusVisible: {
                    borderColor: 'yellow.500',
                    boxShadow: '0 0 0 1px yellow.500'
                }
            }
        }
    }
}
const Divider: ComponentStyleConfig = {
    baseStyle: {
        my: '2'
    }
}
const Checkbox: ComponentStyleConfig = {
    baseStyle: {
        control: {
            borderColor: 'gray.500',
            borderRadius: '4',
            bg: 'whiteAlpha.900'
        }
    },
    defaultProps: {
        colorScheme: 'yellow'
    }
}
const FormLabel: ComponentStyleConfig = {
    baseStyle: {
        mx: '0',
        my: '0',
        lineHeight: 8 // experimental, check later
    }
}

const theme = extendTheme({
    fonts: {
        heading: 'Montserrat, Verdana, Century Gothic, Arial Nova, Open Sans, Segoe UI, Roboto',
        body: 'Montserrat, Verdana, Century Gothic, Arial Nova, Open Sans, Segoe UI, Roboto',
    },

    components: {
        Link,
        Divider,
        Checkbox,
        Input,
        FormLabel
    },

    breakpoints: {
        sm: '30em',
        md: '48em',
        lg: '62em',
        xl: '70em',
        '2xl': '96em',
    }
})

export default theme