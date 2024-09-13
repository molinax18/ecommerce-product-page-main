export const DesktopNavBar = () => {
  return (
    <nav className='hidden md:block'>
      <ul className='flex gap-x-6 text-sm text-dark-grayish-blue'>
        <li>
          <a href='#'>Collections</a>
        </li>
        <li>
          <a href='#'>Men</a>
        </li>
        <li>
          <a href='#'>Women</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </nav>
  )
}
