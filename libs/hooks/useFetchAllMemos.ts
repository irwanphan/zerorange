import { MemoInterface } from "@interfaces//memoInterface"
import axios from "axios"
import { useState, useEffect } from "react"

export const useFetchAllMemos = () => {
    const [ memos, setMemos ] = useState<MemoInterface[]>()
    const [ isLoadingMemos, setIsLoadingMemos ] = useState<boolean>(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`/api/memos/get-all`)
                setMemos(response)
            } catch (error) {
                console.log(error)
            }
            setIsLoadingMemos(false)
        }
        fetchData()
    }, [])

    return {
        memos,
        isLoadingMemos
    }
}