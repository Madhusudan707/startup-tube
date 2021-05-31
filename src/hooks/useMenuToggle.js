import { useState } from 'react'

export const useMenuToggle = () => {

    const [isShowMenu, setIsShowMenu] = useState(true)

    const menuToggleHandler = () => {
        setIsShowMenu(!isShowMenu)
    }

    return { menuToggleHandler, isShowMenu }
}