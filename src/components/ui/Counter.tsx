import { MinusIcon } from './icons/MinusIcon'
import { PlusIcon } from './icons/PlusIcon'

type Props = {
  style?: string
  amount: number
  setAmount: React.Dispatch<React.SetStateAction<number>>
}

export const Counter: React.FC<Props> = ({ style, amount, setAmount }) => {
  const increment = () => setAmount((prev) => prev + 1)
  const decrement = () => setAmount((prev) => (prev > 0 ? prev - 1 : prev))

  const iconStyles =
    'text-orange p-1 transition-d-200 cursor-pointer focus:text-pale-orange hover:text-pale-orange'

  return (
    <div
      className={`flex justify-between items-center bg-light-grayish-blue p-3 rounded-lg ${style}`}
    >
      <MinusIcon
        style={iconStyles}
        onClick={decrement}
      />
      <span className='font-bold text-very-dark-blue'>{amount}</span>
      <PlusIcon
        style={iconStyles}
        onClick={increment}
      />
    </div>
  )
}
