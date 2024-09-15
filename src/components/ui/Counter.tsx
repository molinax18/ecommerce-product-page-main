import { MinusIcon } from './icons/MinusIcon'
import { PlusIcon } from './icons/PlusIcon'

type Props = {
  style?: string
}

export const Counter: React.FC<Props> = ({ style }) => {
  const iconStyles =
    'text-orange p-1 transition-d-200 cursor-pointer focus:text-pale-orange hover:text-pale-orange'

  return (
    <div
      className={`flex justify-between items-center bg-light-grayish-blue p-3 rounded-lg ${style}`}
    >
      <MinusIcon style={iconStyles} />
      <span className='font-bold text-very-dark-blue'>0</span>
      <PlusIcon style={iconStyles} />
    </div>
  )
}
