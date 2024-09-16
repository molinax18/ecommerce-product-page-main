import { Details } from './Details'
import { Product } from './Product'

export const Main = () => {
  return (
    <main className='md:self-center'>
      <section className='flex flex-col gap-6 md:px-4 md:flex-row md:gap-x-20 md:items-center'>
        <Product />
        <Details />
      </section>
    </main>
  )
}
