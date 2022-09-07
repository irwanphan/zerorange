import { ComponentStyleConfig, extendTheme } from "@chakra-ui/react";

const Link: ComponentStyleConfig = {
    baseStyle: {
        _hover: {
            textDecoration: 'none'
        },
        _focus: {
            boxShadow: 'none',
            color: 'pink.800'
        }
    },
}

const theme = extendTheme({
    fonts: {
        heading: 'Open Sans, Roboto, Segoe UI, Arial',
        body: 'Open Sans, Roboto, Segoe UI, Arial',
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