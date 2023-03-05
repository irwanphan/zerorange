export interface UserInterface {
    id: string | null | undefined
    email: string | null | undefined
    name: string | null | undefined
}
export interface IFormInput {
    sentBy: string | undefined
    assignTo: string
    assignToEmail: string
    title: string
    description: string
    user: UserInterface
}

export const createMemoResolver = (values:IFormInput) => {
    return {
        values: values.assignTo ? values : 
                values.title ? values :
                values.description ? values :
                {},
        errors: !values.assignToEmail ?
                { address: {
                    type: 'required',
                    message: 'Assign-to is required.'
                }}
                : !values.title ?
                { title: {
                    type: 'required',
                    message: 'Title is required.'
                }}
                : !values.description ?
                { province: {
                    type: 'required',
                    message: 'Description is required.'
                }}
                : {}
    }
}