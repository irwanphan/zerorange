import { FlexProps, Link, Tooltip } from "@chakra-ui/react"

interface SocialAnchorProps extends FlexProps {
    href: string
    tooltip: string
}

const SocialAnchor = ({href, tooltip, children, ...rest}: SocialAnchorProps) => {
    return (
        <Tooltip hasArrow label={tooltip} bgColor='gray.800' borderRadius='xl' px={3} py={2}>
            <Link 
                display='block' p={2}
                fontSize={24}
                transition='.4s ease all'
                borderWidth='1px 2px 3px 1px'
                borderStyle='solid'
                borderColor='transparent'
                _hover= {{ 
                    borderColor: 'gray.800',
                    shadow: 'lg',
                    borderRadius: 'lg'
                }}
                href={href}>
                {children}
            </Link>
        </Tooltip>
    )
}

export default SocialAnchor