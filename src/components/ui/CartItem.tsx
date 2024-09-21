import { CartProduct } from '../../types'

type Props = {
  cartItem: CartProduct
}

export const CartItem: React.FC<Props> = ({ cartItem }) => {
  const { image, name, price, amount } = cartItem

  return (
    <div className='flex gap-x-2'>
      <img
        src={image}
        alt='Shoe image'
        className='max-h-12 rounded'
      />
      <div className='flex-col text-dark-grayish-blue'>
        <h4>{name}</h4>
        <div className='flex gap-x-2'>
          <span>${price.toFixed(2)}</span>
          <span>x{amount}</span>
          <span className='font-bold text-very-dark-blue'>
            ${(price * amount).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  )
}
