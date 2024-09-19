import { useState } from 'react'
import { DesktopNavbar } from './navbar/DesktopNavbar'
import { MobileNavbar } from './navbar/MobileNavbar'
import { CartIcon } from '../ui/icons/CartIcon'
import { LogoIcon } from '../ui/icons/LogoIcon'
import { MenuIcon } from '../ui/icons/MenuIcon'
import { Cart } from './Cart'
import avatar from '../../../public/images/image-avatar.png'

export const Header = () => {
  const [showCart, setShowCart] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => setShowMenu(!showMenu)
  const toggleCart = () => setShowCart(!showCart)

  return (
    <header className='flex justify-between items-center py-3 px-4 md:py-5'>
      <div className='flex items-center gap-x-4 md:gap-x-6'>
        {!showMenu && (
          <MenuIcon
            style='md:hidden'
            onClick={toggleMenu}
          />
        )}
        <MobileNavbar
          showMenu={showMenu}
          toggleMenu={toggleMenu}
        />
        <LogoIcon style='-mt-1' />
        <DesktopNavbar />
      </div>
      <div className='flex items-center gap-x-6'>
        <CartIcon
          style='text-dark-grayish-blue hover-icons cursor-pointer'
          onClick={toggleCart}
        />
        {showCart && <Cart style='absolute top-20 left-4 right-4 z-10 md:left-auto' />}
        <img
          src={avatar}
          alt='A man with black glasses and long hair.'
          className='size-10'
        />
      </div>
    </header>
  )
}
