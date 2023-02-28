import { Box, Button, Flex } from "@chakra-ui/react"
import router, { useRouter } from "next/router"
import { useState } from "react"
import { users } from "@libs/data/mockUsers"
import FormInput from "@elements/FormInput"
import { FiUser } from "react-icons/fi"
import { useForm } from "react-hook-form"

interface FormValueProps {
    sentBy: string
    assignedTo: string
    title: string
    description: string
}
interface FormAddMemoProps {
    onSubmit: Function
}
const FormAddMemo = ({
    onSubmit
}: FormAddMemoProps) => {

    const { register, handleSubmit } = useForm()

    return (
        <form
            onSubmit={handleSubmit(async (data) => {
                try {
                    // console.log(data)
                    await onSubmit(data)
                    router.push('/');
                }
                catch (e) {
                    console.log(e)
                }
            })}
        >
            <FormInput 
                register={register}
                name="sentBy"
                icon={FiUser}
                label="sent by" />
            <FormInput 
                register={register}
                name="assignedTo"
                // type="selection"
                options={users}
                icon={FiUser}
                label="assign to" />
            <FormInput 
                register={register}
                name="title"
                // disabled={disabled}
                label="title" />
            <FormInput 
                register={register}
                name="description"
                type="textarea" 
                // disabled={disabled}
                label="description" />
            <Flex
                mt={4}
                direction="row"
                justifyContent="flex-end"
                gap={4}>
                <Button
                    type="submit"
                    layerStyle='formSubmitButtonBase'
                    _hover={{ layerStyle:'formSubmitButtonHover' }}>
                    submit
                </Button>

            </Flex>
        </form>
    )
}

export default FormAddMemo