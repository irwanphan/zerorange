import { FlexProps, Link, Tooltip } from "@chakra-ui/react"

interface SocialAnchorProps extends FlexProps {
    href: string
    tooltip: string
}

const SocialAnchor = ({href, tooltip, children, ...rest}: SocialAnchorProps) => {
    return (
        <Tooltip label=''>
            <Link 
                display='block' p={2}
                fontSize={24}
                transition='.4s ease all'
                _hover= {{ boxShadow: '0 1px 0 0 black' }}
                href={href}>
                {children}
            </Link>
        </Tooltip>
    )
}

export default SocialAnchor