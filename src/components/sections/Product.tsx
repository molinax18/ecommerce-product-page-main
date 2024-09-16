import { useState } from 'react'
import { PRODUCTS } from '../../constants'
import { Carrousell } from '../ui/Carrousell'

export const Product = () => {
  const [mainImage, setMainImage] = useState(0)

  return (
    <article className='w-full md:max-w-sm'>
      <Carrousell />
      <section className='hidden md:grid grid-cols-4 gap-4'>
        <img
          src={PRODUCTS[mainImage].product}
          alt='Shoe image'
          className='col-span-full rounded-xl'
        />
        <div className='flex gap-x-4'>
          {PRODUCTS.map((pr, i) => (
            <img
              src={pr.thumbnail}
              alt='Shoe image'
              key={i}
              className='rounded-xl'
            />
          ))}
        </div>
      </section>
    </article>
  )
}
