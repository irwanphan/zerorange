import { MemoInterface } from "@interfaces//memoInterface"
import axios from "axios"
import { useState, useEffect } from "react"

export const useFetchCatalog = (userId:any) => {
    const [ memos, setMemos ] = useState<MemoInterface[]>()
    const [ isLoadingCatalog, setIsLoadingCatalog ] = useState<boolean>(true)

    const [ qid, setQid ] = useState()

    useEffect(() => {
        userId === undefined    ? console.log('waiting ...')
                                : setQid(userId)
    }, [userId])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`/api/memos/get-all-by-user-id/?userId=${qid}`)
                setMemos(response)
            } catch (error) {
                console.log(error)
            }
            setIsLoadingCatalog(false)
        }
        fetchData()
    }, [])

    return {
        memos,
        isLoadingCatalog
    }
}