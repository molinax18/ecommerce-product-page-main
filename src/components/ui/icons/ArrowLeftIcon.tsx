import { IconProps } from '../../../types'

export const ArrowLeftIcon: React.FC<IconProps> = ({ style, onClick }) => {
  return (
    <span
      className={style}
      onClick={onClick}
    >
      <svg
        width='13'
        height='18'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M11 1 3 9l8 8'
          stroke='currentColor'
          strokeWidth='3'
          fill='none'
          fillRule='evenodd'
        />
      </svg>
    </span>
  )
}
