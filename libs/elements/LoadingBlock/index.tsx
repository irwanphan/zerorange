import { Box, FlexProps, Grid, Skeleton } from "@chakra-ui/react"
import BubbleContainer from "@elements/BubbleContainer"

const LoadingBlock = ({children}: FlexProps) => {
    return (
        <BubbleContainer>
            <Skeleton h={40} mb={3} />
            <Skeleton h={5} mb={3} />
            <Skeleton h={3} mb={3} />
            {children}
        </BubbleContainer>
    )
}

export const LoadingCatalog = () => {
    return (
        <Grid templateColumns={{base: '1fr', sm:'1fr 1fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr'}} gap={4}>
            <LoadingBlock />
            <LoadingBlock />
            <LoadingBlock />
            <LoadingBlock />
        </Grid>
    )
}

export const LoadingBlockList = () => {
    return (
        <Box>
            <Skeleton h={6} mb={2} />
            <Skeleton h={4} />
        </Box>
    )
}

export default LoadingBlock