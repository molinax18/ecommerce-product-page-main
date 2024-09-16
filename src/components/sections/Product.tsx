import { useState } from 'react'
import { PRODUCTS } from '../../constants'
import { Carrousell } from '../ui/Carrousell'
import { DesktopCarrousell } from '../ui/DesktopCarrousell'

export const Product = () => {
  const [showModal, setShowModal] = useState(false)
  const [mainImage, setMainImage] = useState(0)
  const changeImage = (i: number) => setMainImage(i)
  const toggleModal = () => setShowModal(!showModal)

  return (
    <article className='w-full md:max-w-sm'>
      <Carrousell />
      <section className='hidden md:grid grid-cols-4 gap-4'>
        <img
          src={PRODUCTS[mainImage].product}
          alt='Shoe image'
          className='col-span-full rounded-xl cursor-pointer hover-product-image'
          onClick={toggleModal}
        />
        <div className='flex gap-x-4 col-span-full'>
          {PRODUCTS.map((pr, i) => (
            <figure
              key={i}
              className={`overflow-hidden rounded-xl cursor-pointer border-2 ${
                mainImage === i ? 'border-orange' : 'border-transparent'
              }`}
            >
              <img
                src={pr.thumbnail}
                alt='Shoe image'
                className={`hover-product-image ${
                  mainImage === i && 'opacity-50'
                }`}
                onClick={() => changeImage(i)}
              />
            </figure>
          ))}
        </div>
      </section>
      {showModal && (
        <DesktopCarrousell
          imgIndex={mainImage}
          toggleModal={toggleModal}
        />
      )}
    </article>
  )
}
