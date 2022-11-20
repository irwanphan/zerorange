import { Box, Checkbox, FormLabel, Input, Textarea } from "@chakra-ui/react"
import BubbleContainer from "@elements/BubbleContainer"
import FormInput from "@elements/FornInput"
import PageSection from "@elements/Section"
import MainLayout from "@libs/layouts/MainLayout"
import { FiPenTool } from "react-icons/fi"

const CreateTask = () => {
    return (
        <MainLayout>
            <PageSection>
                <BubbleContainer
                    title="Create New Task"
                    icon={FiPenTool}
                >
                    <form>
                        <FormInput label="title" />
                        <FormInput type="textarea" label="description" />
                    </form>
                </BubbleContainer>
            </PageSection>
        </MainLayout>
    )
}

export default CreateTask