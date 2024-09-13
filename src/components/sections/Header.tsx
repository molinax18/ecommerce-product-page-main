import { useState } from 'react'
import { DesktopNavbar } from './navbar/DesktopNavbar'
import { MobileNavbar } from './navbar/MobileNavbar'
import { CartIcon } from '../ui/icons/CartIcon'
import { LogoIcon } from '../ui/icons/LogoIcon'
import { MenuIcon } from '../ui/icons/MenuIcon'
import avatar from '../../../public/images/image-avatar.png'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className='flex justify-between items-center'>
      <div className='flex items-center gap-x-4 md:gap-x-6'>
        {!isOpen && (
          <MenuIcon
            style='md:hidden'
            onClick={toggleMenu}
          />
        )}
        <MobileNavbar
          isOpen={isOpen}
          toggleMenu={toggleMenu}
        />
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
