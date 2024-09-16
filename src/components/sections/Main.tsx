import { Details } from './Details'
import { Product } from './Product'

export const Main = () => {
  return (
    <main className='flex flex-col gap-6 md:px-4 md:flex-row md:self-center md:gap-x-20'>
      <Product />
      <Details />
    </main>
  )
}
