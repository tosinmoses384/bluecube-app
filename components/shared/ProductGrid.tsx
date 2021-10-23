import { Img, Heading, Text } from './primitives'
import Box from './Box'
import productsObj from '../../data/product'
import { useRouter } from 'next/router'

function Card({ imgUrl, cardText, handleClick }) {
  return (
    <Box className="card" onClick={handleClick}>
      <Img src={imgUrl} />
      <Text mt={2} display="inline-block" fontSize={1} color="#000000">
        {cardText}
      </Text>
    </Box>
  )
}

type ProductGridProps = {
  productCategory: 'asset' | 'wealth' | 'trustees'
  productTitle: string
}

export default function ProductGrid({
  productCategory,
  productTitle,
}: ProductGridProps): JSX.Element {
  const router = useRouter()
  const products = productsObj[productCategory]
  const getUrl = (productCategory) => {
    switch (productCategory) {
      case 'asset':
        return 'am-product'
      case 'wealth':
        return 'wm-product'
      case 'trustees':
        return 'trustees-product'
      default:
        break
    }
  }
  const url = getUrl(productCategory)
  const handleClick = () => {
    router.push(url)
  }

  return (
    <Box className="container">
      <Heading
        as="h3"
        fontSize={'14px'}
        fontWeight={4}
        lineHeight="22px"
        color="#002E5A"
        mb={3}
      >
        {productTitle}
      </Heading>
      <Box className="card-container">
        {products.map((product) => {
          const { imgUrl, cardText } = product
          return (
            <Card
              key={imgUrl}
              imgUrl={imgUrl}
              cardText={cardText}
              handleClick={handleClick}
            />
          )
        })}
      </Box>
    </Box>
  )
}
