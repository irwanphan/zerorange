export interface IFormInput {
    sentBy: string
    assignTo: string
    title: string
    description: string
}

export const createMemoResolver = (values:IFormInput) => {
    return {
        values: values.assignTo ? values : 
                values.title ? values :
                values.description ? values :
                {},
        errors: !values.assignTo ?
                { address: {
                    type: 'required',
                    message: 'Assign-to is required.'
                }}
                : !values.assignTo ?
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