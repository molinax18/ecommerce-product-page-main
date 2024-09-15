import { LIST_ITEMS } from '../../../constants'
import { CloseIcon } from '../../ui/icons/CloseIcon'
import { motion, AnimatePresence } from 'framer-motion'

type MobileNavbarProps = {
  toggleMenu: () => void
  isOpen: boolean
}

export const MobileNavbar: React.FC<MobileNavbarProps> = ({
  toggleMenu,
  isOpen
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className='absolute z-20 inset-0 bg-shadow md:hidden'
          children={
            <div className='absolute top-0 left-0 bottom-0 z-10 px-4 py-6 w-2/3 bg-white'>
              <CloseIcon onClick={toggleMenu} />
              <nav className='mt-12'>
                <ul className='flex flex-col gap-y-4 text-very-dark-blue font-[800]'>
                  {LIST_ITEMS.map((it, i) => (
                    <li key={i}>
                      <a href='#'>{it}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          }
        />
      )}
    </AnimatePresence>
  )
}
