import { Box, Checkbox, FormLabel, Input } from "@chakra-ui/react"
import BubbleContainer from "@elements/BubbleContainer"
import FormInput from "@elements/FornInput"
import PageSection from "@elements/Section"
import MainLayout from "@libs/layouts/MainLayout"

const CreateTask = () => {
    return (
        <MainLayout>
            <PageSection>
                <BubbleContainer
                    title="Create New Task"
                >
                    <form>
                        <FormInput label="title" />
                        
                    </form>
                </BubbleContainer>
            </PageSection>
        </MainLayout>
    )
}

export default CreateTask