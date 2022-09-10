import { Box, Flex, HStack } from "@chakra-ui/react"
import SocialAnchor from "@elements/SocialAnchor"
import { FiMail, FiGithub, FiLinkedin, FiFeather, FiDribbble, FiInstagram } from "react-icons/fi"
import { InView, useInView } from "react-intersection-observer"

const SocialAnchorMenu = () => {
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
                        w='max-content' mx='auto'
                        alignItems='center'
                        position={!inView ? 'fixed' : 'relative'}
                        bgColor={!inView ? 'whiteAlpha.900' : 'transparent'}
                        h='6rem' 
                        transition='0.3s ease all'
                        zIndex={2}
                        px={8}
                        rounded='2xl'
                        borderWidth='1px 2px 3px 1px'
                        borderStyle='solid'
                        borderColor={!inView ? 'gray.800' : 'transparent'}
                        bottom={-4} left={0} right={0}        
                        >
                        <HStack gap={2}>
                            <SocialAnchor href='mailto:irwanphan@gmail.com' tooltip='email me'>
                                <FiMail/>
                            </SocialAnchor>
                            <SocialAnchor href='https://instagram.com/irwanphan' tooltip='my repos'>
                                <FiInstagram/>
                            </SocialAnchor>
                            <SocialAnchor href='https://github.com/irwanphan' tooltip='my repos'>
                                <FiGithub/>
                            </SocialAnchor>
                            <SocialAnchor href='https://linkedin.com/in/irwanphan' tooltip='linked'>
                                <FiLinkedin/>
                            </SocialAnchor>
                            <SocialAnchor href='https://behance.net/irwanphan' tooltip='behance'>
                                <FiFeather/>
                            </SocialAnchor>
                            <SocialAnchor href='https://dribbble.com/irwanphan' tooltip='dribbble'>
                                <FiDribbble/>
                            </SocialAnchor>
                        </HStack>
                        <Box position='fixed' top={0} right={0}>{inView.toString()}</Box>
                    </Flex>
                </Box>
            }
        </InView>
    )
}

export default SocialAnchorMenu