import { useState } from 'react'
import { PRODUCTS } from '../../constants'
import { ArrowLeftIcon } from './icons/ArrowLeftIcon'
import { ArrowRightIcon } from './icons/ArrowRightIcon'
import { motion, AnimatePresence } from 'framer-motion'

export const Carrousell = () => {
  const [currentProduct, setCurrentProduct] = useState(0)
  const iconStyles =
    'absolute top-1/2 -translate-y-1/2 bg-white size-9 rounded-full flex justify-center items-center cursor-pointer hover:text-orange focus:text-orange transition-d-200'
  const prevProduct = () => {
    if (currentProduct === 0) setCurrentProduct(PRODUCTS.length - 1)
    setCurrentProduct((prev) => prev - 1)
  }

  const nextProduct = () => {
    if (currentProduct === PRODUCTS.length - 1) setCurrentProduct(0)
    setCurrentProduct((prev) => prev + 1)
  }

  return (
    <div className='relative w-full min-h-96 md:hidden'>
      <AnimatePresence>
        <motion.img
          key={currentProduct}
          src={PRODUCTS[currentProduct].product}
          alt='Shoe image'
          className='absolute w-full h-full object-cover'
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      <ArrowLeftIcon
        style={`${iconStyles} left-0 ml-4`}
        onClick={prevProduct}
      />
      <ArrowRightIcon
        style={`${iconStyles} right-0 mr-4`}
        onClick={nextProduct}
      />
    </div>
  )
}
