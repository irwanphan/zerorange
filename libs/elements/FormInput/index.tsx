import { Box, FlexProps, FormLabel, Input, InputGroup, InputLeftElement, InputRightElement, NumberInput, NumberInputField, Textarea } from "@chakra-ui/react"
import { IconMatched } from "@elements/SkillBadgeContent";
import { ReactNode } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { IconType } from "react-icons/lib";

interface optionProps {
    id: string
    image?: string
    value?: string | number
    label: string
}
interface FormInputProps extends FlexProps {
    name: string
    label? : string
    type? : string
    register: any
    autoFocus?: boolean
    value? : string | number
    placeholder?: string
    options? : optionProps[]
    icon? : IconType
    spaceAfter?: string
    isDisabled?: boolean
    isReadOnly?: boolean
    haveLeftIcon?: boolean
    leftIcon? : string
    haveRightIcon?: boolean
    rightIcon? : string
    rightIconFunction? : void|any
}

const FormInput = ({name, label, type, register, autoFocus, value, placeholder, options, icon, spaceAfter, isDisabled, isReadOnly, haveLeftIcon, leftIcon, haveRightIcon, rightIcon, rightIconFunction, children, ...rest}:FormInputProps) => {
    const FormInputManifest = () => {
        if (type === 'textarea') {
            return (
                <Textarea
                    {...register(name)}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    layerStyle='formInputBase'
                    // border and _hover not working on extend theme
                    borderColor='gray.900'
                    _hover={{ layerStyle: 'formInputHover' }}
                    mb={ spaceAfter ?? '2' }
                    isDisabled={isDisabled}
                    isReadOnly={isReadOnly}
                    autoFocus={autoFocus}
                />
            )
        }
        if (type === 'number') {
            return (
                <NumberInput isDisabled={isDisabled}>
                    <NumberInputField 
                        {...register(name)}
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        layerStyle='formInputBase'
                        borderColor='gray.900'
                        _hover={{ layerStyle: 'formInputHover' }}
                        mb={ spaceAfter ?? '2' }
                        isReadOnly={isReadOnly}
                        autoFocus={autoFocus}
                    />
                </NumberInput>
            )
        }
        return (
            <InputGroup>
                {   haveLeftIcon ?
                    <InputLeftElement
                        pointerEvents='none'
                        color='gray.300'
                        fontSize='1.2em'
                    >
                    </InputLeftElement>
                    : <></>
                }
                <Input type='text'
                    {...register(name)}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    layerStyle='formInputBase'
                    borderColor='gray.900'
                    _hover={{ layerStyle: 'formInputHover' }}
                    mb={ spaceAfter ?? '2' }
                    autoFocus={autoFocus}
                    isReadOnly={isReadOnly}
                    isDisabled={isDisabled}
                />
                {   haveRightIcon ?
                    <InputRightElement
                        pointerEvents={ rightIconFunction ? "inherit" : "none" }
                        cursor={ rightIconFunction ? 'pointer' : 'default' }
                        color='gray.300'
                        fontSize='1.2em'
                        onClick={rightIconFunction}
                    >
                        {   
                            rightIcon   ? <IconMatched icon={rightIcon} iconColor='blackAlpha.800' /> 
                                        : <FiMoreHorizontal/>
                        }
                    </InputRightElement>
                    : <></>
                }
            </InputGroup>
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