import { Box, Flex, HStack } from "@chakra-ui/react"
import AnchorMenuIcon from "@elements/AnchorMenu"
import { FiMail, FiGithub, FiLinkedin, FiFeather, FiDribbble, FiInstagram, FiPenTool } from "react-icons/fi"
import { InView, useInView } from "react-intersection-observer"

const AnchorMenuNav = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: '8rem'
    })
    
    return (
        <InView>
            {({inView, ref}) =>
                <Box>
                    <Box ref={ref} h='6rem'
                        position={inView ? 'absolute' : 'relative'}
                    />
                    <Flex  
                        w={{ base: 'full', md: 'max-content' }} 
                        mx='auto'
                        alignItems='center'
                        justifyContent='center'
                        position={!inView ? 'fixed' : 'relative'}
                        bgColor={!inView ? 'whiteAlpha.900' : 'transparent'}
                        h='6rem' 
                        transition='0.3s ease all'
                        zIndex={2}
                        px={{ base: 0, md: 8 }}
                        rounded={{ base: 'none', md: '2xl' }}
                        borderWidth={{ base: '1px 0 0 0', md: '1px 2px 3px 1px' }}
                        borderStyle='solid'
                        borderColor={!inView ? 'gray.800' : 'transparent'}
                        boxShadow={!inView ? '2xl' : 'none'}
                        bottom={-4} left={0} right={0}        
                        >
                        <HStack gap={{ base: 0, md: 2 }}>
                            <AnchorMenuIcon href='/tasks/create' tooltip='add new task'>
                                <FiPenTool/>
                            </AnchorMenuIcon>
                            <AnchorMenuIcon href='https://instagram.com/irwanphan' tooltip='follow me'>
                                <FiInstagram/>
                            </AnchorMenuIcon>
                            <AnchorMenuIcon href='https://github.com/irwanphan' tooltip='my repos'>
                                <FiGithub/>
                            </AnchorMenuIcon>
                        </HStack>
                        {/* <Box position='fixed' top={0} right={0}>{inView.toString()}</Box> */}
                    </Flex>
                </Box>
            }
        </InView>
    )
}

export default AnchorMenuNav