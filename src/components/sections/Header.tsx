import { DesktopNavBar } from './NavBar'
import { CartIcon } from '../ui/icons/CartIcon'
import { LogoIcon } from '../ui/icons/LogoIcon'
import { MenuIcon } from '../ui/icons/MenuIcon'
import avatar from '../../../public/images/image-avatar.png'

export const Header = () => {
  return (
    <header className='flex justify-between items-center py-3 px-4'>
      <div className='flex items-center gap-x-4 md:gap-x-6'>
        <MenuIcon style='md:hidden' />
        <LogoIcon style='-mt-1'/>
        <DesktopNavBar />
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
