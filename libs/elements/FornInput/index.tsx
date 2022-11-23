import { Box, Flex, FlexProps, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Textarea } from "@chakra-ui/react"
// import { users } from "@data//mockUsers"
import {
    AutoComplete,
    AutoCompleteInput,
    AutoCompleteItem,
    AutoCompleteList,
    AutoCompleteTag,
} from "@choc-ui/chakra-autocomplete";
import { FiList } from "react-icons/fi";
import { IconType } from "react-icons/lib";

interface optionProps {
    id: string
    image?: string
    value?: string
    label: string
}
// interface multiTagProps {
//     id: string
//     image: string
//     value: string
//     label: string
// }

interface FormInputProps extends FlexProps {
    label? : string
    type? : string
    // items? : multiTagProps[]
    options? : optionProps[]
    icon? : IconType
    spaceAfter?: string
}

const FormInput = ({label, type, options, icon, spaceAfter, children, ...rest}:FormInputProps) => {

    const FormInputManifest = () => {
        if (type === 'selection') {
            return (
                <AutoComplete 
                    onChange={vals => console.log(vals)}
                    rollNavigation>
                    <InputGroup mb={ spaceAfter ?? '2' } >
                        <InputLeftElement
                            pointerEvents="none"
                            color="inherit"
                            fontSize="1.2em"
                            >
                            <Box as={icon ?? FiList} />
                        </InputLeftElement>
                        <AutoCompleteInput variant="filled" placeholder="Search..." 
                            borderColor='gray.900'
                            layerStyle='formInputBase'
                            _hover={{ layerStyle: 'formInputHover' }}
                            _focus={{ layerStyle: 'formInputFocus', bgGradient: 'linear(to-r, whiteAlpha.900 70%, yellow.300)' }}
                        />
                    </InputGroup>
                    <AutoCompleteList>
                        {options!.map((option, oid) => (
                            <AutoCompleteItem
                                key={`option-${oid}`}
                                value={option.label}
                                textTransform="capitalize"
                                >
                                {option.label}
                            </AutoCompleteItem>
                        ))}
                    </AutoCompleteList>
                </AutoComplete>
            )
        }
        if (type === 'multitags') {
            return (
                <Flex layerStyle={'formInputBase'} 
                    role="group"
                    borderColor='gray.900'
                    _hover={{ layerStyle: 'formInputHover' }}
                    w="full" direction="column"
                    mb={ spaceAfter ?? '2' }
                    >
                    <FormControl id="email">
                        <AutoComplete 
                            openOnFocus 
                            multiple 
                            onChange={vals => console.log(vals)}
                            >
                            <AutoCompleteInput 
                                _groupFocus={{ layerStyle: 'formInputHover' }}
                                variant="filled"
                                bgColor='transparent'
                                color='transparent'
                                _hover={{ bg:"transparent" }}
                                _focus={{ color:"black" }}
                                px={2}
                            >
                                {({ tags }) =>
                                    tags.map((tag, tid) => (
                                        <AutoCompleteTag
                                            key={tid}
                                            label={tag.label}
                                            onRemove={tag.onRemove}
                                            border='1px solid black'
                                            bgColor='blue.100'
                                        />
                                    ))
                                }
                            </AutoCompleteInput>
                            <AutoCompleteList p={0} mt={0}>
                                <Box border='1px solid black'
                                    borderRadius='0.5rem'
                                    position='relative'
                                >
                                    {options!.map((option, oid) => (
                                        <AutoCompleteItem
                                            key={`option-${oid}`}
                                            value={option.label}
                                            textTransform="capitalize"
                                            _selected={{ bg: "transparent" }}
                                            _focus={{ bg: "transparent" }}
                                            _hover={{ bg: "transparent" }}
                                            >
                                            {option.label}
                                        </AutoCompleteItem>
                                    ))}
                                </Box>
                            </AutoCompleteList>
                        </AutoComplete>
                    </FormControl>
                </Flex>
            )
        }
        if (type === 'textarea') {
            return (
                <Textarea
                    layerStyle='formInputBase'
                    // border and _hover not working on extend theme
                    borderColor='gray.900'
                    _hover={{ layerStyle: 'formInputHover' }}
                    mb={ spaceAfter ?? '2' }
                />
            )
        }
        return (
            <Input type='text'
                layerStyle='formInputBase'
                borderColor='gray.900'
                _hover={{ layerStyle: 'formInputHover' }}
                mb={ spaceAfter ?? '2' }
            />
        )
    }

    return (
        <Box {...rest}>
            <FormLabel
                position='relative'
                display='inline-block'
                fontSize={14}
                px={2}
                textTransform='capitalize'
            >
                {label}
            </FormLabel>
            <FormInputManifest />
            
        </Box>
    )
}

export default FormInput