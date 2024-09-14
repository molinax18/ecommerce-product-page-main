import { IconProps } from '../../../types'

export const ArrowRightIcon: React.FC<IconProps> = ({ style, onClick }) => {
  return (
    <span
      className={style}
      onClick={onClick}
    >
      <svg
        width='12'
        height='18'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='m2 1 8 8-8 8'
          stroke='currentColor'
          strokeWidth='3'
          fill='none'
          fillRule='evenodd'
        />
      </svg>
    </span>
  )
}
