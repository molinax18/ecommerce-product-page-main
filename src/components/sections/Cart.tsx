import { CardContainer } from '../ui/CardContainer'

type Props = {
  style: string
}

export const Cart: React.FC<Props> = ({ style }) => {
  return (
    <CardContainer style={style}>
      <section className='flex flex-col gap-y-3 min-h-64 md:w-72'>
        <header className='p-3'>
          <h3 className='font-bold'>Cart</h3>
        </header>
        <hr />
        <div className='flex grow items-center justify-center p-3'>
          <p className='font-bold text-dark-grayish-blue'>
            Your cart is empty.
          </p>
        </div>
      </section>
    </CardContainer>
  )
}
