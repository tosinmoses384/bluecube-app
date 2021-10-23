import { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import Box from './Box'
import { Text } from './primitives'
import Swiper, { SwiperRefNode } from 'react-id-swiper'
import SVG from 'react-inlinesvg'
import moment from 'moment'

const StyledItem = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30px;
  height: 100%;
  padding: 0.5rem;
  .text {
    font-weight: normal;
    font-size: 10px;
    color: #655f5f;
    margin-bottom: 4px;
  }
  .num {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15px;
    height: 17px;
    padding: 10px;
    border: 1px solid #d2d7db;
    border-radius: 5px;
    cursor: pointer;
    .value {
      font-weight: normal;
      font-size: 12px;
      color: #4f4f4f;
    }
  }
  &.selected {
    .text {
      color: #021a34;
      font-weight: bold;
    }
    .num {
      background-color: #d2d7db;
      .value {
        color: #fbfdff;
      }
    }
  }
`

const Container = styled(Box)`
  position: relative;
  .pagination-btn {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 10;
    transition: all 0.3s;
    top: 38%;
    &.prev {
      left: 10px;
      right: auto;
    }
    &.next {
      left: auto;
      right: 10px;
    }
    &:hover {
      background-color: #eeeeee;
    }
  }
`

type CalendarProps = {
  onDateSelect: (date: string) => void
}

const CalendarCarousel = ({ onDateSelect }: CalendarProps): JSX.Element => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0)
  const swiperRef = useRef<SwiperRefNode>(null)
  const params = {
    slidesPerView: 'auto' as const,
    spaceBetween: 16,
  }

  const date = new Date()
  const firstDate = moment(new Date(date.getFullYear(), date.getMonth(), 1))

  const daysInMonth = moment().daysInMonth()

  const goNext = () => {
    if (swiperRef?.current?.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }

  const goPrev = () => {
    if (swiperRef?.current?.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  const dateSelect = (params) => {
    const { key, date } = params
    setSelectedDayIndex(key)
    if (typeof onDateSelect === 'function') {
      onDateSelect(date)
    }
  }

  const generateDates = (params) => {
    const { firstDate, numberOfDays } = params
    const date = moment(firstDate)

    const dates = []
    for (let i = 0; i < numberOfDays; i++) {
      dates.push({
        date: date.format('YYYY-MM-DD'),
        day: date.format('D'),
        dayOfWeek: date.format('dddd'),
        month: date.format('MMMM'),
      })
      date.add(1, 'days')
    }
    return dates
  }

  const daysProps = {
    firstDate,
    numberOfDays: daysInMonth,
  }

  const availableDates = generateDates(daysProps)

  useEffect(() => {
    const selected = moment(new Date())
    const selectedIndex = Math.floor(
      moment.duration(selected.diff(firstDate)).asDays()
    )
    setSelectedDayIndex(selectedIndex)
    if (typeof onDateSelect === 'function') {
      const _date = selected.format('YYYY-MM-DD')
      onDateSelect(_date)
    }
  }, [])

  return (
    <Container>
      <Box className="pagination-btn prev" onClick={goPrev}>
        <SVG src={'/media/svg/icons/prev.svg'} />
      </Box>
      <Box className="pagination-btn next" onClick={goNext}>
        <SVG src={'/media/svg/icons/next.svg'} />
      </Box>
      <Box className="px-5">
        <Swiper {...params} ref={swiperRef}>
          {availableDates.map((item, key, arr) => (
            <StyledItem
              key={item.day}
              onClick={() => dateSelect({ key, date: arr[key].date })}
              className={selectedDayIndex === key ? 'selected' : ''}
            >
              <Text className="text">
                {item.dayOfWeek.slice(0, 3).toUpperCase()}
              </Text>
              <Box className="num">
                <Text className="value">{item.day}</Text>
              </Box>
            </StyledItem>
          ))}
        </Swiper>
      </Box>
    </Container>
  )
}
export default CalendarCarousel
