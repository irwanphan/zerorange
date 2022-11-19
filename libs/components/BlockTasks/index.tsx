import { Box, FlexProps, SimpleGrid, Text } from "@chakra-ui/react"
import BubbleContainer from "@elements/BubbleContainer"
import IconicTitle from "@elements/IconicTitle"
import PageSection from "@elements/Section"
import { nanoid } from "nanoid"
import { FiTrello } from "react-icons/fi"
import axios from "axios"

export interface TaskProps extends FlexProps {
    id          : string
    image?      : string
    title       : string
    description : string
    price?      : number
    createdAt   : Date
    updatedAt   : Date
}
export type TaskTypes = {
    tasks       : TaskProps[]
}

const BlockTasks = ( {tasks}:TaskTypes ) => {

    const addTask = (data:TaskProps) => axios.post('/api/tasks', data);

    return (
        <PageSection>
            <BubbleContainer>
                <IconicTitle icon={FiTrello} hoverColor='blue.200'>Task List</IconicTitle>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing='4'>
                    {tasks[0].title}
                </SimpleGrid>
            </BubbleContainer>
      </PageSection>
    )
}

export default BlockTasks