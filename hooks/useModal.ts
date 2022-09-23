import { useState } from 'react'

const useModal = (initialValue: boolean): [boolean, () => void] => {
    const [showModal, setShowModal] = useState<boolean>(initialValue)

    const toggleModal = () => setShowModal(!showModal)

    return [showModal, toggleModal]
}

export default useModal