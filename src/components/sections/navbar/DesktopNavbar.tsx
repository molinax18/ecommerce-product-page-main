import { LIST_ITEMS } from '../../../constants'

export const DesktopNavbar = () => {
  const beforeStyles =
    'relative hover:before:absolute before:top-14 before:bg-orange before:w-full before:h-1 before:transition-d-200 before:scale-x-0 hover:before:scale-x-100'
  
    return (
    <nav className='hidden md:block'>
      <ul className='flex gap-x-6 text-sm text-dark-grayish-blue'>
        {LIST_ITEMS.map((it, i) => (
          <li key={i}>
            <a
              href='#'
              className={`transition-d-200 ${beforeStyles} hover:text-very-dark-blue`}
            >
              {it}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
