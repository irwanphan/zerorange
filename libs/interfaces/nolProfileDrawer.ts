export interface NolProfileDrawerInterface {
    placement: string | any
    isOpen?: boolean
    onOpen?: () => void
    onClose?: () => void
    onToggle?: () => void
}