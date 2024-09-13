import { LIST_ITEMS } from '../../../constants'

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
