import firstProduct from '../public/images/image-product-1.jpg'
import secondProduct from '../public/images/image-product-2.jpg'
import thirdProduct from '../public/images/image-product-3.jpg'
import fourthProduct from '../public/images/image-product-4.jpg'
import firstProductThumbnail from '../public/images/image-product-1-thumbnail.jpg'
import secondProductThumbnail from '../public/images/image-product-2-thumbnail.jpg'
import thirdProductThumbnail from '../public/images/image-product-3-thumbnail.jpg'
import fourthProductThumbnail from '../public/images/image-product-4-thumbnail.jpg'

type Products = {
  default: string[],
  thumbnail: string[]
}

export const LIST_ITEMS: string[] = ['Collections', 'Men', 'Women', 'About', 'Contact']
export const PRODUCTS: Products = {
  default: [firstProduct, secondProduct, thirdProduct, fourthProduct],
  thumbnail: [firstProductThumbnail, secondProductThumbnail, thirdProductThumbnail, fourthProductThumbnail]
}