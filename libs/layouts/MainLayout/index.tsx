import { Box, FlexProps } from "@chakra-ui/react"
import AnchorMenuNav from "../AnchorMenuNav"
import CustomHeader from "../CustomHeader"

const MainLayout = ({children, ...rest}: FlexProps) => {
    return (
        <Box
            bgColor='blue.50'
            minHeight='100vh'
            pb={10}
            {...rest}
        >
            <CustomHeader />
            <AnchorMenuNav/>

            {children}
        </Box>
    )
}


export default MainLayout