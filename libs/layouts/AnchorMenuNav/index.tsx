import { Box, Flex, HStack, useDisclosure } from "@chakra-ui/react"
import NolProfileDrawer from "@components/NolProfileDrawer"
import AnchorMenuIcon, { AnchorMenuIconTrigger } from "@elements/AnchorMenu"
import { useRouter } from "next/router"
import { useState } from "react"
import { FiGithub, FiFeather, FiInstagram, FiTrello } from "react-icons/fi"
import { MdFace } from "react-icons/md"
import { InView, useInView } from "react-intersection-observer"

const AnchorMenuNav = () => {
    const router = useRouter()
    const path = router.pathname

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ placement, setPlacement ] = useState<string|any>('right')

    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: '8rem'
    })
    
    return (
        <Box>

        <InView>
            {({inView, ref}) =>
                <Box>
                    <Box ref={ref} h='6rem'
                        position={inView ? 'absolute' : 'relative'}
                    />
                    <Flex  
                        w={{ base: 'full', md: 'max-content' }}
                        gap={{ base: 2, md: 4 }}
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
                            <AnchorMenuIcon href='/' tooltip='dashboard'>
                                <FiTrello/>
                            </AnchorMenuIcon>
                            <AnchorMenuIcon href='/memos/create' tooltip='add new memo'>
                                <FiFeather/>
                            </AnchorMenuIcon>
                            <AnchorMenuIcon href='https://instagram.com/irwanphan' tooltip='follow me'>
                                <FiInstagram/>
                            </AnchorMenuIcon>
                            <AnchorMenuIcon href='https://github.com/irwanphan/zerorange' tooltip='fork JarakNol'>
                                <FiGithub/>
                            </AnchorMenuIcon>
                        </HStack>
                        {/* <Box position='fixed' top={0} right={0}>{inView.toString()}</Box> */}

                        <HStack gap={{ base: 0, md: 2 }}>
                            {
                                path == '/checkout' ? '' :
                                <AnchorMenuIconTrigger tooltip='you got something' onOpen={onOpen}>
                                    <MdFace />
                                </AnchorMenuIconTrigger>
                            }
                        </HStack>
                    </Flex>
                </Box>
            }
        </InView>

            <NolProfileDrawer placement={placement} onClose={onClose} isOpen={isOpen} />
            
        </Box>
    )
}

export default AnchorMenuNav