import { IconProps } from '../../../types'

export const MenuIcon: React.FC<IconProps> = ({ style, onClick }) => {
  return (
    <span className={style} onClick={onClick}>
      <svg
        width='16'
        height='16'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z'
          fill='#69707D'
          fillRule='evenodd'
        />
      </svg>
    </span>
  )
}
