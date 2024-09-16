import firstProduct from '../public/images/image-product-1.jpg'
import secondProduct from '../public/images/image-product-2.jpg'
import thirdProduct from '../public/images/image-product-3.jpg'
import fourthProduct from '../public/images/image-product-4.jpg'
import firstProductThumbnail from '../public/images/image-product-1-thumbnail.jpg'
import secondProductThumbnail from '../public/images/image-product-2-thumbnail.jpg'
import thirdProductThumbnail from '../public/images/image-product-3-thumbnail.jpg'
import fourthProductThumbnail from '../public/images/image-product-4-thumbnail.jpg'

type Product = {
  product: string,
  thumbnail: string
}

export const LIST_ITEMS: string[] = ['Collections', 'Men', 'Women', 'About', 'Contact']

export const PRODUCTS: Product[] = [
  {
    product: firstProduct,
    thumbnail: firstProductThumbnail
  },
  {
    product: secondProduct,
    thumbnail: secondProductThumbnail
  },
  {
    product: thirdProduct,
    thumbnail: thirdProductThumbnail
  },
  {
    product: fourthProduct,
    thumbnail: fourthProductThumbnail
  }
]