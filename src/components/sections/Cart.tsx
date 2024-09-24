import { CartContext, useCartContext } from '../../context/CartContext'
import { Button } from '../ui/Button'
import { CardContainer } from '../ui/CardContainer'
import { CartItem } from '../ui/CartItem'

type Props = {
  style: string
}

export const Cart: React.FC<Props> = ({ style }) => {
  const { state } = useCartContext() as CartContext

  return (
    <CardContainer style={style}>
      <section className='flex flex-col gap-y-3 min-h-52 md:min-w-72'>
        <header className='p-3'>
          <h3 className='font-bold'>Cart</h3>
        </header>
        <hr />
        <div className='flex-col grow items-center justify-center p-3'>
          {state.length === 0 ? (
            <p className='font-bold text-center text-dark-grayish-blue'>
              Your cart is empty.
            </p>
          ) : (
            <article className='flex flex-col gap-y-4'>
              <ul className='flex flex-col'>
                {state.map((pr, i) => (
                  <li key={i}>
                    <CartItem cartItem={pr} />
                  </li>
                ))}
              </ul>
              <Button>
                <span className='font-bold'>Checkout</span>
              </Button>
            </article>
          )}
        </div>
      </section>
    </CardContainer>
  )
}
