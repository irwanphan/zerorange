import { Box, Text } from "@chakra-ui/react"
import { MemoProps } from "@libs/components/BlockMemos"
import Link from 'next/link'

interface MemoInterface {
    memo: MemoProps
}

const StickyMemo = ({memo}:MemoInterface) => {
    return (
        <Link passHref 
            href={`/memos/${memo.id}`}
        >
            <Box key={memo.id}
                borderRadius='0.5rem'
                borderStyle='solid'
                borderColor='gray.800'
                borderWidth='1px 2px 3px 1px'
                bgGradient='linear(to-r, yellow.200, orange.200)'
                bgSize='180%'
                role='group'
                transition='.3s ease all'
                py={2}
                px={4}
                _hover={{
                    shadow: 'lg',
                    cursor: 'pointer',
                    bgSize: '100%',
                    borderBottomRightRadius: '1.5rem'
                }}
            >
                <Text
                    fontWeight={600}
                    textTransform='capitalize'
                >
                    {memo.title}
                </Text>
                <Text>
                    {memo.description}
                </Text>
                <Text
                    mt={3}
                    fontSize={12}
                >
                    from: {memo.sentBy}
                </Text>
            </Box>
        </Link>
    )
}

export default StickyMemo