import { Box, Button, Flex } from "@chakra-ui/react"
import * as Yup from 'yup'
import { Formik, Form } from "formik"
import { useRouter } from "next/router"
import { useState } from "react"
import { users } from "@data//mockUsers"
import FormInput from "@elements/FornInput"
import { toast } from 'react-hot-toast';
import { FiUser } from "react-icons/fi"
import { useForm } from "react-hook-form"

const TaskSchema = Yup.object().shape({
    assignedTo: Yup.string().trim().required(),
    title: Yup.string().trim().required(),
    description: Yup.string().trim().required(),
})

interface FormValueProps {
    assignedTo: string
    title: string
    description: string
}
interface FormAddMemoProps {
    // initialValues: FormValueProps|null
    // redirectPath: string
    // buttonText: string
    onSubmit: Function
}
const FormAddMemo = ({
    onSubmit
}: FormAddMemoProps) => {

    // const handleOnSubmit = async (values:any = null) => {
    //     let toastId
    //     console.log(...values)
    //     try {
    //         setDisabled(true);
    //         toastId = toast.loading('Submitting...');
    //         // Submit data
    //         if (typeof onSubmit === 'function') {
    //             await onSubmit({ ...values });
    //         }
    //         toast.success('Successfully submitted', { id: toastId });
    //         // Redirect user
    //         if (redirectPath) {
    //             router.push(redirectPath);
    //         }
    //     } catch (e) {
    //         toast.error('Unable to submit', { id: toastId });
    //         setDisabled(false);
    //     }
    // }

    const { register, handleSubmit } = useForm()

    return (
        <form
            onSubmit={handleSubmit((data) => {
                console.log(data)
                // onSubmit(data)
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
                label="title" 
            />
            <FormInput 
                register={register}
                name="description"
                type="textarea" 
                // disabled={disabled}
                label="description" 
            />

            <Flex
                mt={4}
                direction="row"
                justifyContent="flex-end"
                gap={4}
            >
                <Button
                    type="submit"
                    layerStyle='formSubmitButtonBase'
                    _hover={{ layerStyle:'formSubmitButtonHover' }}
                >
                    submit
                </Button>

            </Flex>
        </form>
    )
}

export default FormAddMemo