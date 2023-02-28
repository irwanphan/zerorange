import BubbleContainer from "@elements/BubbleContainer"
import PageSection from "@elements/Section"
import MainLayout from "@libs/layouts/MainLayout"
import { FiFeather, FiPenTool, FiUser } from "react-icons/fi"
// import { Button, Flex, Input } from "@chakra-ui/react"
import axios from "axios"

import FormAddMemo from "@libs/components/PageMemos/FormAddMemo"
import { Box, Flex, useDisclosure, useToast } from "@chakra-ui/react"
import FormInput from "@elements/FormInput"
import { useAuth } from "@contexts/authContext"
import { useRecoilValue } from "recoil"
import { useEffect, useState } from "react"
import { Resolver, SubmitHandler, useForm } from "react-hook-form"
import { useRouter } from "next/router"
import { createMemoResolver, IFormInput } from "@interfaces//createMemoInterface"
import WarningBox from "@elements/WarningBox"
import FormSubmitButton from "@elements/FormSubmit"
import NolGoldDivider from "@elements/NolGoldDivider"
import LoadingBlock from "@elements/LoadingBlock"
import ModalPopup from "@units/ModalPopup"

const resolver: Resolver<IFormInput> = async (values) => {
    return createMemoResolver(values)
}

const CreateMemoPage = () => {
    // const addMemo = (data:any) => axios.post('/api/memos', data);

    const { session, isLoadingSession } = useAuth()
    console.log(session?.user.email)
    const [ userEmail, setUserEmail ] = useState<string|undefined>()

    // const checkCart = useRecoilValue<CartItemCheckoutInterface[]|any>(checkCartState)
    // const setCart = useSetRecoilState(cartState)
    // const { total, isLoadingTotal } = useCartTotal()
    // console.log(total)
    const [ isLoading, setIsLoading ] = useState(true)
    const [ isDisabled, setDisabled ] = useState(false)
    // handling form
    const { handleSubmit, register, setValue, formState: { errors } } = useForm({
        defaultValues: {
            sentBy: '',
            assignTo: '',
            title: '',
            description: ''
        },
        resolver
    })

    useEffect(() => {
        // setUserEmail(session?.user.email)
        setValue('sentBy', session?.user.email)
        if(session) {
            setIsLoading(false)
        }
    }, [session])

    const router = useRouter()
    const createUserIfNotExist = (data:any) => axios.post('/api/users', data)
    const createPurchaseOrder = (data:any) => axios.post('/api/purchases', data)
    const toast = useToast()
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        // console.log('running', data)
    }

    // handling logout modal
    const { isOpen:isModalOpen, onOpen:onModalOpen, onClose:onModalClose } = useDisclosure()
    const modalProps = {
        title: `Roster List`,
        texts: 'Pick someone',
        button: 'Set',
        action: () => {
            // toastIdRef.current = toast({ title:'Logging Out...' })
            onModalClose()
            // setSession(null),
            // signOut()
            // toast.update(toastIdRef.current, { description: 'Logged Out' })
        }
    }

    if (isLoading) {
        return (
            <MainLayout>
                <LoadingBlock />
            </MainLayout>
        )
    }

    return (
        <MainLayout>
            <PageSection>
                <BubbleContainer
                    title="Create New Memo"
                    icon={FiFeather}
                >
                    <Box>
                        <FormInput 
                            name='sentBy'
                            label='Send By' 
                            placeholder="sender email"
                            value={userEmail}
                            isDisabled={isDisabled}
                            isReadOnly
                            autoFocus
                            register={register} />
                            { errors?.sentBy && <WarningBox>{errors.sentBy.message}</WarningBox> }
                        <FormInput 
                            name='assignTo'
                            label='Assign To' 
                            placeholder="Assign this to"
                            isDisabled={isDisabled}
                            haveRightIcon
                            rightIcon='addressbook'
                            rightIconFunction={() => onModalOpen()}
                            autoFocus
                            register={register} />
                            { errors?.description && <WarningBox>{errors.description.message}</WarningBox> }
                        <FormInput 
                            name='title'
                            label='Title' 
                            placeholder="eg. Check The Journal, Please"
                            isDisabled={isDisabled}
                            autoFocus
                            register={register} />
                            { errors?.title && <WarningBox>{errors.title.message}</WarningBox> }
                        <FormInput 
                            name='description'
                            label='Description'
                            type="textarea"
                            placeholder="eg. Everything is upside down in this ..."
                            isDisabled={isDisabled}
                            autoFocus
                            register={register} />
                            { errors?.description && <WarningBox>{errors.description.message}</WarningBox> }

                        <NolGoldDivider />

                        <Flex justifyContent='right'>
                            <FormSubmitButton notLink >asdf</FormSubmitButton>
                        </Flex>
                    </Box>
                    
                </BubbleContainer>
            </PageSection>

            <ModalPopup modalProps={modalProps} isOpen={isModalOpen} onClose={onModalClose} canCancel />
        </MainLayout>
    )
}

export default CreateMemoPage