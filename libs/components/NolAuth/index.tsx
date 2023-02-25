import { Box, useDisclosure, useToast, Flex, Text } from "@chakra-ui/react"
import FormSubmitButton from "@elements/FormSubmit"
import ModalPopup from "@units/ModalPopup"
import { FcGoogle } from "react-icons/fc"
import { RxExit } from "react-icons/rx"
import SessionProfile from "@units/SessionProfile"
import { LoadingBlockList } from "@elements/LoadingBlock"
import { signInWithGoogle } from "@libs/connections/signIn"
import { useAuth } from "@contexts/authContext"
import { useSetRecoilState } from "recoil"
import { sessionState } from "@contexts/session"
import { signOut } from "@libs/connections/signOut"
import { useRef } from "react"

const TokoAuth = () => {
    const { session, user, isLoadingSession } = useAuth()
    const setSession = useSetRecoilState(sessionState)
    // console.log('session in TokoAuth:', session)
    // console.log ('user', user)
    const toast = useToast()
    const toastIdRef = useRef<string | any>()

    // handling logout modal
    const { isOpen:isModalOpen, onOpen:onModalOpen, onClose:onModalClose } = useDisclosure()
    const modalProps = {
        title: `Logging Out?`,
        texts: 'Come back safely',
        button: 'See You',
        action: () => {
            toastIdRef.current = toast({ title:'Logging Out...' })
            onModalClose(),
            setSession(null),
            signOut()
            toast.update(toastIdRef.current, { description: 'Logged Out' })
        }
    }

    if (isLoadingSession) {
        return (
            <LoadingBlockList />
        )
    }

    if (session) {
        return (
            <Box>
                <Text fontSize={12}>
                    Hi there,
                </Text>
                <Box mt={1} mb={3}
                    borderLeftColor='blue.300'
                    borderLeftWidth='0.5rem'
                    borderLeftStyle='solid'
                    paddingLeft={2}>
                    <SessionProfile session={session}/>
                </Box>
                <FormSubmitButton href="/admin-area" mr={2} px={3} >
                    Admin Area
                </FormSubmitButton>
                <FormSubmitButton notLink px={3}
                    onClick={() => onModalOpen()}>
                    <Box as={RxExit} mr={2} /> Logout
                </FormSubmitButton>

                <ModalPopup modalProps={modalProps} isOpen={isModalOpen} onClose={onModalClose} canCancel />
            </Box>
        )
    }

    return (
        <Box>               
            <Text fontSize={12}>
                You're not login yet
            </Text>
            <Flex gap={2}>
                {/* <FormSubmitButton href="/register">
                    <Box as={GiNewBorn} mr={1} fontSize={20} />register
                </FormSubmitButton> */}
                <FormSubmitButton notLink
                    onClick={() => {
                        toast({title:'Redirecting...'})
                        signInWithGoogle()
                    }}>
                    <Box as={FcGoogle} mr={1} fontSize={20} />Login
                </FormSubmitButton>
            </Flex>
        </Box>
    )
}

export default TokoAuth