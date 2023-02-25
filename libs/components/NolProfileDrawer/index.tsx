import { Box, useToast, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, Divider, DrawerBody, DrawerFooter } from "@chakra-ui/react"
import FormSubmitButton from "@elements/FormSubmit"
import { FcGoogle } from "react-icons/fc"
import { NolProfileDrawerInterface } from "@interfaces//nolProfileDrawer"
import { signInWithGoogle } from "@libs/connections/signIn"
import { useAuth } from "@contexts/authContext"
import NolAuth from "@components/NolAuth"

const NolProfileDrawer = ({placement, onClose, isOpen}: NolProfileDrawerInterface) => {
    const { session } = useAuth()
    // const { data: session } = useSession()

    const toast = useToast()
    
    return (
        <Drawer placement={placement} onClose={onClose!} isOpen={isOpen!} size="md">
            <DrawerOverlay />
            <DrawerContent borderLeft='2px solid black'>
                <DrawerHeader>
                    <NolAuth />
                    <Divider />
                    Your Dash-Drawer
                </DrawerHeader>
                <DrawerBody>
                    asdf
                </DrawerBody>

                <DrawerFooter>
                    <FormSubmitButton notLink onClick={onClose} mr={2}>
                        Close
                    </FormSubmitButton>
                    {/* { session ?
                        <FormSubmitButton href="/checkout" buttonColor="green.100" >
                            Checkout
                        </FormSubmitButton>
                    :
                        <FormSubmitButton 
                            onClick={() => {
                                toast({title:'Redirecting...'})
                                signInWithGoogle()
                            }}
                            href="/" buttonColor="green.50" >
                            <Box as={FcGoogle} mr={1} fontSize={20} />Login to Checkout
                        </FormSubmitButton>
                    } */}
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default NolProfileDrawer