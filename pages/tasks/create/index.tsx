import BubbleContainer from "@elements/BubbleContainer"
import FormInput from "@elements/FornInput"
import PageSection from "@elements/Section"
import MainLayout from "@libs/layouts/MainLayout"
import { FiPenTool, FiUser } from "react-icons/fi"
import { Button, Flex } from "@chakra-ui/react"

import { users } from "@data//mockUsers"

const CreateTask = () => {
    // console.log(users)

    return (
        <MainLayout>
            <PageSection>
                <BubbleContainer
                    title="Create New Task"
                    icon={FiPenTool}
                >
                    <form>
                        <FormInput 
                            type="selection"
                            options={users}
                            icon={FiUser}
                            label="assign to" />
                        <FormInput label="title" />
                        <FormInput type="textarea" label="description" />

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
                                Submit
                            </Button>

                        </Flex>
                    </form>
                </BubbleContainer>
            </PageSection>
        </MainLayout>
    )
}

export default CreateTask