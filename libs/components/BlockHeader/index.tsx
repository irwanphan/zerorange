import { Box, HStack, Circle, Img, Heading, Divider, Text } from "@chakra-ui/react"
import PageSection from "@elements/Section"

const BlockHeader = () => {
    return (
        <PageSection py={16}>
            <HStack mx={'auto'} w='max-content'>
                <Circle size={40} overflow='hidden' mr={4}
                    borderStyle='solid'
                    borderColor='gray.800'
                    borderWidth='2px 3px 4px 2px'>
                    <Img src='/profile.jpg' />
                </Circle>
                <Box>
                    <Heading>Hi, I am Irwan</Heading>
                    <Divider my={2}/>
                    <Text>I like to learn new things</Text>
                    <Text>I am a self starter. I am good at determining what to do to accomplish a defined goal</Text>
                </Box>
            </HStack>
        </PageSection>
    )
}

export default BlockHeader