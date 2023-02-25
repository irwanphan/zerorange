import BubbleContainer from "@elements/BubbleContainer"
import PageSection from "@elements/Section"
import MainLayout from "@libs/layouts/MainLayout"
import { FiFeather, FiPenTool, FiUser } from "react-icons/fi"
// import { Button, Flex, Input } from "@chakra-ui/react"
import axios from "axios"

import FormAddMemo from "@libs/components/PageMemos/FormAddMemo"
import { Box, useToast } from "@chakra-ui/react"
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

const resolver: Resolver<IFormInput> = async (values) => {
    return createMemoResolver(values)
}

const CreateMemoPage = () => {
    // const addMemo = (data:any) => axios.post('/api/memos', data);

    const { session, isLoadingSession } = useAuth()
    // console.log(session)
    // const checkCart = useRecoilValue<CartItemCheckoutInterface[]|any>(checkCartState)
    // const setCart = useSetRecoilState(cartState)
    // const { total, isLoadingTotal } = useCartTotal()
    // console.log(total)
    const [ isLoading, setIsLoading ] = useState(true)
    const [ isDisabled, setDisabled ] = useState(false)
    // handling form
    const { handleSubmit, register, formState: { errors } } = useForm({
        defaultValues: {
            sentBy: '',
            assignTo: '',
            title: '',
            description: ''
        },
        resolver
    })

    useEffect(() => {
        if(session !== null) {
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

    return (
        <MainLayout>
            <PageSection>
                <BubbleContainer
                    title="Create New Memo"
                    icon={FiFeather}
                >
                    <Box>
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
                        <FormSubmitButton notLink >asdf</FormSubmitButton>
                    </Box>
                    
                </BubbleContainer>
            </PageSection>
        </MainLayout>
    )
}

export default CreateMemoPage