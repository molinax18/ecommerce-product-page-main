import { useEffect, useState } from 'react'
import { DesktopNavbar } from './navbar/DesktopNavbar'
import { MobileNavbar } from './navbar/MobileNavbar'
import { CartIcon } from '../ui/icons/CartIcon'
import { LogoIcon } from '../ui/icons/LogoIcon'
import { MenuIcon } from '../ui/icons/MenuIcon'
import { Cart } from './Cart'
import avatar from '../../../public/images/image-avatar.png'
import { CartContext, useCartContext } from '../../context/CartContext'

export const Header = () => {
  const { state } = useCartContext() as CartContext
  const [showCart, setShowCart] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [amountCart, setAmountCart] = useState(0)
  const toggleMenu = () => setShowMenu(!showMenu)
  const toggleCart = () => setShowCart(!showCart)

  useEffect(() => {
    setAmountCart(state.length)
  }, [state])

  return (
    <header className='relative flex justify-between items-center py-3 px-4 md:py-5'>
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
          onClick={() => {
            toggleCart()
            setAmountCart(0)
          }}
        />
        {amountCart > 0 && (
          <span className='absolute bottom-5 ml-3 px-[6px] bg-orange rounded-full text-white text-xs'>
            {state.length}
          </span>
        )}
        {showCart && (
          <Cart style='absolute top-20 left-4 right-4 z-10 md:left-auto' />
        )}
        <img
          src={avatar}
          alt='A man with black glasses and long hair.'
          className='size-10 cursor-pointer rounded-full border-2 border-transparent transition hover:border-orange'
        />
      </div>
    </header>
  )
}
