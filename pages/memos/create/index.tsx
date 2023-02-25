import BubbleContainer from "@elements/BubbleContainer"
import PageSection from "@elements/Section"
import MainLayout from "@libs/layouts/MainLayout"
import { FiFeather, FiPenTool, FiUser } from "react-icons/fi"
// import { Button, Flex, Input } from "@chakra-ui/react"
import axios from "axios"

import FormAddMemo from "@libs/components/PageMemos/FormAddMemo"

const CreateMemo = () => {
    // console.log(users)
    const addMemo = (data:any) => axios.post('/api/memos', data);

    return (
        <MainLayout>
            <PageSection>
                <BubbleContainer
                    title="Create New Memo"
                    icon={FiFeather}
                >
                    
                </BubbleContainer>
            </PageSection>
        </MainLayout>
    )
}

export default CreateMemo