import { useState } from 'react'
import { DesktopNavbar, MobileNavbar } from './Navbar'
import { CartIcon } from '../ui/icons/CartIcon'
import { LogoIcon } from '../ui/icons/LogoIcon'
import { MenuIcon } from '../ui/icons/MenuIcon'
import avatar from '../../../public/images/image-avatar.png'

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => setShowMenu(!showMenu)

  return (
    <header className='flex justify-between items-center py-3 px-4'>
      <div className='flex items-center gap-x-4 md:gap-x-6'>
        {showMenu ? (
          <MobileNavbar toggleMenu={toggleMenu} />
        ) : (
          <MenuIcon
            style='md:hidden'
            onClick={toggleMenu}
          />
        )}
        <LogoIcon style='-mt-1' />
        <DesktopNavbar />
      </div>
      <div className='flex items-center gap-x-4'>
        <CartIcon />
        <img
          src={avatar}
          alt='A man with black glasses and long hair.'
          className='size-10'
        />
      </div>
    </header>
  )
}
