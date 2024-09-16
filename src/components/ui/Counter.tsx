import { useState } from 'react'
import { MinusIcon } from './icons/MinusIcon'
import { PlusIcon } from './icons/PlusIcon'

type Props = {
  style?: string
}

export const Counter: React.FC<Props> = ({ style }) => {
  const [counter, setCounter] = useState(0)
  const increment = () => setCounter((prev) => prev + 1)
  const decrement = () => setCounter((prev) => (prev > 0 ? prev - 1 : prev))

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
      <span className='font-bold text-very-dark-blue'>{counter}</span>
      <PlusIcon
        style={iconStyles}
        onClick={increment}
      />
    </div>
  )
}
