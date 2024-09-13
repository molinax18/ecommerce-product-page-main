import { CloseIcon } from '../ui/icons/CloseIcon'

const LIST_ITEMS: string[] = ['Collections', 'Men', 'Women', 'About', 'Contact']

export const DesktopNavbar = () => {
  return (
    <nav className='hidden md:block'>
      <ul className='flex gap-x-6 text-sm text-dark-grayish-blue'>
        {LIST_ITEMS.map((it, i) => (
          <li key={i}>
            <a href='#'>{it}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export const MobileNavbar = () => {
  return (
    <div className="absolute inset-0 bg-shadow">
      <div className='absolute top-0 left-0 bottom-0 z-10 px-4 py-6 w-2/3 bg-white md:hidden'>
        <CloseIcon />
        <nav className="mt-12">
          <ul className='flex flex-col gap-y-4 text-very-dark-blue font-[800]'>
            {LIST_ITEMS.map((it, i) => (
              <li key={i}>
                <a href='#'>{it}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
