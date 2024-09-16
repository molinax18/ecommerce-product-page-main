import { useState } from 'react'
import { PRODUCTS } from '../../constants'
import { ArrowLeftIcon } from './icons/ArrowLeftIcon'
import { ArrowRightIcon } from './icons/ArrowRightIcon'
import { motion, AnimatePresence } from 'framer-motion'
import { CloseIcon } from './icons/CloseIcon'

type Props = {
  toggleModal: () => void
  imgIndex: number
}

export const DesktopCarrousell: React.FC<Props> = ({
  imgIndex,
  toggleModal
}) => {
  const [currentProduct, setCurrentProduct] = useState(imgIndex)
  const changeProduct = (i: number) => setCurrentProduct(i)

  const prevProduct = () => {
    if (currentProduct === 0) setCurrentProduct(PRODUCTS.length - 1)
    setCurrentProduct((prev) => prev - 1)
  }

  const nextProduct = () => {
    if (currentProduct === PRODUCTS.length - 1) setCurrentProduct(0)
    setCurrentProduct((prev) => prev + 1)
  }

  const arrowStyles =
    'absolute top-1/2 -translate-y-1/2 bg-white size-9 rounded-full flex justify-center items-center cursor-pointer hover-icons'

  return (
    <div className='flex flex-col gap-y-4 justify-center items-center absolute z-20 inset-0 min-h-screen bg-shadow'>
      <div className='relative z-20 max-w-md flex flex-col gap-y-4'>
        <div className='relative self-center w-full min-h-96'>
          <AnimatePresence>
            <motion.img
              key={currentProduct}
              src={PRODUCTS[currentProduct].product}
              alt='Shoe image'
              className='absolute col-span-full w-full h-full object-cover rounded-xl hover-product-image'
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          <ArrowLeftIcon
            style={`${arrowStyles} left-0 -ml-4`}
            onClick={prevProduct}
          />
          <ArrowRightIcon
            style={`${arrowStyles} right-0 -mr-4`}
            onClick={nextProduct}
          />
          <CloseIcon
            style={`absolute right-0 -top-12 bg-transparent text-white cursor-pointer hover-icons`}
            onClick={toggleModal}
          />
        </div>
        <div className='flex gap-x-4 w-[70%] self-center'>
          {PRODUCTS.map((pr, i) => (
            <figure
              key={i}
              className={`overflow-hidden rounded-xl cursor-pointer border-2 hover-product-image ${
                currentProduct === i ? 'border-orange' : 'border-transparent'
              }`}
            >
              <img
                src={pr.thumbnail}
                alt='Shoe image'
                className={`${currentProduct === i && 'opacity-50'}`}
                onClick={() => changeProduct(i)}
              />
            </figure>
          ))}
        </div>
      </div>
    </div>
  )
}
