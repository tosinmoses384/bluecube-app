import { useRef, useState } from 'react'
import styled from 'styled-components'
import Box from './Box'
import Swiper, { SwiperRefNode } from 'react-id-swiper'
import SVG from 'react-inlinesvg'

const Container = styled(Box)`
  .pagination-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background-color: #eeeeee;
    }
  }
`

type CardProps = {
  renderedData: any[]
}

const CardCarousel = ({ renderedData }: CardProps): JSX.Element => {
  const swiperRef = useRef<SwiperRefNode>(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const params = {
    slidesPerView: 'auto' as const,
    spaceBetween: 16,
  }

  const goNext = () => {
    if (swiperRef?.current?.swiper) {
      swiperRef.current.swiper.slideNext()
      setIsBeginning(swiperRef.current.swiper.isBeginning)
      setIsEnd(swiperRef.current.swiper.isEnd)
    }
  }

  const goPrev = () => {
    if (swiperRef?.current?.swiper) {
      swiperRef.current.swiper.slidePrev()
      setIsBeginning(swiperRef.current.swiper.isBeginning)
      setIsEnd(swiperRef.current.swiper.isEnd)
    }
  }

  return (
    <Container>
      <Box display="flex" justifyContent="flex-end" alignItems="center" mb={2}>
        <Box className="pagination-btn prev" mr={3} onClick={goPrev}>
          <SVG
            src={
              isBeginning
                ? '/media/svg/icons/prev-light.svg'
                : '/media/svg/icons/prev-dark.svg'
            }
          />
        </Box>
        <Box className="pagination-btn next" onClick={goNext}>
          <SVG
            src={
              isEnd
                ? '/media/svg/icons/next-light.svg'
                : '/media/svg/icons/next-dark.svg'
            }
          />
        </Box>
      </Box>
      <Swiper {...params} ref={swiperRef}>
        {renderedData}
      </Swiper>
    </Container>
  )
}
export default CardCarousel
