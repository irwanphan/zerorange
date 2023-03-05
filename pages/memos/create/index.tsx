import BubbleContainer from "@elements/BubbleContainer"
import PageSection from "@elements/Section"
import FormInput from "@elements/FormInput"
import WarningBox from "@elements/WarningBox"
import FormSubmitButton from "@elements/FormSubmit"
import NolGoldDivider from "@elements/NolGoldDivider"
import LoadingBlock from "@elements/LoadingBlock"
import ModalPopup from "@units/ModalPopup"
import MainLayout from "@libs/layouts/MainLayout"
import { FiFeather } from "react-icons/fi"
import { Box, Flex, Radio, RadioGroup, useDisclosure } from "@chakra-ui/react"
import { Resolver, SubmitHandler, useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

import axios from "axios"
import { useAuth } from "@contexts/authContext"
import { createMemoResolver, IFormInput } from "@interfaces//createMemoInterface"
import { nanoid } from "nanoid"

const resolver: Resolver<IFormInput> = async (values) => {
    return createMemoResolver(values)
}
const dummyemail = [
    {   id: "dummy1", email: "dummy1@gmail.com"   },
    {   id: "dummy2", email: "dummy2@gmail.com"   },
    {   id: "dummy3", email: "dummy3@gmail.com"   }
]

const CreateMemoPage = () => {
    const createUserIfNotExist = (data:any) => axios.post('/api/users', data)
    const createNewMemo = (data:any) => axios.post('/api/memos/create-memo', data)

    const { session, isLoadingSession } = useAuth()
    const [ assignId, setAssignId ] = useState<string>('')
    const [ assignEmail, setAssignEmail ] = useState<string>('')

    const [ isLoading, setIsLoading ] = useState(true)
    const [ isDisabled, setDisabled ] = useState(false)
    // handling form
    const { handleSubmit, register, setValue, setFocus, formState: { errors } } = useForm({
        defaultValues: {
            sentBy: '',
            assignTo: '',
            assignToEmail: '',
            title: '',
            description: '',
            user: { email: '', name: '', id: '' }
        },
        resolver
    })

    useEffect(() => {
        setValue('sentBy', session?.user.email)
        if(session) {
            setIsLoading(false)
        }
    }, [session])
    useEffect(() => {
        const selectedEmail = dummyemail.find(item => item.id === assignId)?.email
        setAssignEmail(selectedEmail!)
    }, [assignId])

    const router = useRouter()
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        setIsLoading(true)
        data.user.email = session!.user.email
        data.user.name = session!.user.user_metadata.name
        data.user.id = session!.user.id
        console.log('submit data: ', data)
        
        const userData = {
            id: session!.user.id,
            email: session!.user.email,
            name: session!.user.user_metadata.name,
            image: session!.user.user_metadata.picture
        }
        // const user = await createUserIfNotExist(userData)
        // const memo = await createNewMemo(data)

        setIsLoading(false)
        // router.push('/')
    }

    // handling logout modal
    const { isOpen:isModalOpen, onOpen:onModalOpen, onClose:onModalClose } = useDisclosure()
    const modalProps = {
        title: `Pick Someone`,
        button: 'Set',
        action: () => {
            setValue('assignTo', assignId)
            setValue('assignToEmail', assignEmail)
            onModalClose()
            setFocus('title') // focus on title Input // not working
            setAssignEmail('') // clear assign email state
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
                            isDisabled={isDisabled}
                            isReadOnly
                            autoFocus
                            register={register} />
                            { errors?.sentBy && <WarningBox>{errors.sentBy.message}</WarningBox> }
                        <FormInput 
                            name='assignToEmail'
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
                            <FormSubmitButton notLink 
                                bgColor='green.100'
                                onClick={handleSubmit(onSubmit)}
                            >Submit</FormSubmitButton>
                        </Flex>
                    </Box>
                    
                </BubbleContainer>
            </PageSection>

            <ModalPopup modalProps={modalProps} isOpen={isModalOpen} onClose={onModalClose} canCancel>
                <RadioGroup onChange={setAssignId}>
                    {
                        dummyemail.map((item) => {
                            return (
                                <Radio value={item.id} key={nanoid()}>
                                    {item.email}
                                </Radio>
                            )
                        })
                    }
                </RadioGroup>
            </ModalPopup>
        </MainLayout>
    )
}

export default CreateMemoPage