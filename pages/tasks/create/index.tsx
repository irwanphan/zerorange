import BubbleContainer from "@elements/BubbleContainer"
import FormInput from "@elements/FornInput"
import PageSection from "@elements/Section"
import MainLayout from "@libs/layouts/MainLayout"
import { FiPenTool, FiUser } from "react-icons/fi"
import { Button } from "@chakra-ui/react"

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

                        <Button>
                            Submit
                        </Button>
                    </form>
                </BubbleContainer>
            </PageSection>
        </MainLayout>
    )
}

export default CreateTask