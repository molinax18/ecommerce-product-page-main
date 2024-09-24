import { CartContext, useCartContext } from '../../context/CartContext'
import { CartProduct } from '../../types'
import { DeleteIcon } from './icons/DeleteIcon'

type Props = {
  cartItem: CartProduct
}

export const CartItem: React.FC<Props> = ({ cartItem }) => {
  const { dispatch } = useCartContext() as CartContext 
  const { image, name, price, amount } = cartItem

  return (
    <div className='flex gap-x-6 items-center'>
      <div className='flex gap-x-4'>
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
      <DeleteIcon
        style='hover-icon text-dark-grayish-blue hover-icons cursor-pointer'
        onClick={() => dispatch({type: 'DELETE_CART', payload: name})}
      />
    </div>
  )
}
