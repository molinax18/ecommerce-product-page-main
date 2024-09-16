import { Button } from "../ui/Button"
import { Counter } from "../ui/Counter"
import { CartIcon } from "../ui/icons/CartIcon"

export const Details = () => {
  return (
    <article className='flex flex-col gap-y-6 py-3 px-4 text-dark-grayish-blue w-full max-w-lg mx-auto'>
      <header>
        <span className='uppercase tracking-widest text-xs font-bold'>
          Sneaker company
        </span>
        <h1 className='mt-2 text-3xl font-bold text-very-dark-blue lg:text-5xl'>
          Fall Limited Edition Sneakers
        </h1>
      </header>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className='flex justify-between items-baseline font-semibold md:flex-col md:gap-y-2'>
        <div className='flex gap-x-6 items-center'>
          <strong className='text-3xl text-very-dark-blue font-[700]'>$125.00</strong>
          <span className='px-2 bg-very-dark-blue rounded-md text-white'>50%</span>
        </div>
        <span className='line-through'>$250.00</span>
      </div>
      <footer className='flex flex-col gap-4 md:flex-row'>
        <Counter style='md:flex-initial md:w-2/5' />
        <Button style='flex justify-center md:flex-1'>
          <span className='inline-flex gap-x-4 items-center font-bold'>
            <CartIcon style='text-very-dark-blue -mt-1' />
            Add to cart
          </span>
        </Button>
      </footer>
    </article>
  )
}
