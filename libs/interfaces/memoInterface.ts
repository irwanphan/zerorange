import { FlexProps } from "@chakra-ui/react"

export interface MemoInterface extends FlexProps {
    id          : string
    image?      : string
    title       : string
    description : string
    sentBy      : string
    assignTo    : string
    createdAt   : Date
    updatedAt   : Date
}
export type MemosInterface = {
    memos       : MemoInterface[]
}