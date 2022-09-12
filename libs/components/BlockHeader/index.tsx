import { Box, Circle, Img, Heading, Divider, Text, Tooltip, Flex } from "@chakra-ui/react"
import PageSection from "@elements/Section"

const BlockHeader = () => {
    return (
        <PageSection py={16}>
            <Flex mx={'auto'} gap={2}
                alignItems='center' justifyContent='center' 
                textAlign={{ base: 'center', md: 'left' }}
                wrap={{ base: 'wrap', md: 'nowrap' }}
            >
                <Circle size={40} overflow='hidden' mr={4}
                    borderStyle='solid'
                    borderColor='gray.800'
                    borderWidth='2px 3px 4px 2px'>
                    <Img src='/profile.jpg' />
                </Circle>
                <Box>
                    <Heading><Tooltip label="こんにちわ">Hi</Tooltip>, I am Irwan</Heading>
                    <Divider my={2} borderColor='gray.400'/>
                    <Text>I like to learn new things</Text>
                    <Text>I am a self starter. I am good at determining what to do to accomplish a defined goal</Text>
                </Box>
            </Flex>
        </PageSection>
    )
}

export default BlockHeader