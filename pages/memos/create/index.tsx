import BubbleContainer from "@elements/BubbleContainer"
import FormInput from "@elements/FornInput"
import PageSection from "@elements/Section"
import MainLayout from "@libs/layouts/MainLayout"
import { FiPenTool, FiUser } from "react-icons/fi"
import { Button, Flex } from "@chakra-ui/react"
import axios from "axios"

import { users } from "@data//mockUsers"
import FormAddMemo from "@libs/components/PageMemos/FormAddMemo"

const CreateMemo = () => {
    // console.log(users)
    const addMemo = (data:any) => axios.post('/api/tasks', data);

    return (
        <MainLayout>
            <PageSection>
                <BubbleContainer
                    title="Create New Memo"
                    icon={FiPenTool}
                >
                    <FormAddMemo onSubmit={addMemo}/>
                </BubbleContainer>
            </PageSection>
        </MainLayout>
    )
}

export default CreateMemo