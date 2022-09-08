import { ComponentStyleConfig, extendTheme } from "@chakra-ui/react";

const Link: ComponentStyleConfig = {
    baseStyle: {
        _hover: {
            textDecoration: 'none'
        },
        _focus: {
            boxShadow: 'none',
            color: 'purple.800'
        }
    },
}

const theme = extendTheme({
    fonts: {
        heading: 'Montserrat, Verdana, Century Gothic, Arial Nova, Open Sans, Segoe UI, Roboto',
        body: 'Montserrat, Verdana, Century Gothic, Arial Nova, Open Sans, Segoe UI, Roboto',
    },

    component: {
        Link
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