import { Box, HStack } from "@chakra-ui/react"
import SocialAnchor from "@elements/SocialAnchor"
import { FiMail, FiGithub, FiLinkedin, FiFeather, FiDribbble } from "react-icons/fi"
import { InView, useInView } from "react-intersection-observer"

const SocialAnchorMenu = () => {
    const { ref, inView } = useInView({
        threshold: 0
    })
    
    return (
        <InView>
            {({inView, ref}) =>
                <Box py={8} w='max-content' mx='auto'>
                    <HStack ref={ref} gap={2}>
                        <SocialAnchor href='mailto:irwanphan@gmail.com' tooltip='email me'>
                            <FiMail/>
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
                </Box>
            }
        </InView>
    )
}

export default SocialAnchorMenu