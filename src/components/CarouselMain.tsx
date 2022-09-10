import Carousel from './Carousel'
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline'
import styled from 'styled-components'
import { useState } from 'react'

const CircleDiv = styled.div`
  border-radius:500px;
  background-color:rgba(217.0000022649765, 217.0000022649765, 217.0000022649765, 1);
  width:116px;
  height:116px;
  vertical-align: middle;
  border: 1px solid black;
  margin-left: 10px;
`
const DivWithoutCircle = styled.div`
  border-radius:500px;
  width:116px;
  height:116px;
  margin-left: 10px;
`

const CircleText = styled.div`
  margin-left: 30%;
  margin-top: 40%;
  text-align: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #000000;
`

interface CarouselProps {
  items: any[]
  headerFormatter: (any) => string
  mainItemFormatter: (any) => string
  onSelectedDate: (any) => void
}

// eslint-disable-next-line react/prop-types
const CarouselMain: React.FunctionComponent<CarouselProps> = ({ items, headerFormatter, mainItemFormatter, onSelectedDate }) => {
  const [selectedIndex, setSelectedIndex] = useState(3)

  const onDateSelected = (index: number): void => {
    onSelectedDate(items[index])
    setSelectedIndex(index)
  }

  return (
        <ScopedCssBaseline>
            <div className="App">
                <Carousel>
                    {/* eslint-disable-next-line react/prop-types */}
                    {items?.map((item, index) => {
                      return (
                          <div key={index} style={{ position: 'relative', marginLeft: '20%', width: '33%' }} onClick={() => onDateSelected(index)}>
                              <CircleDivSelector filledCircle={index === selectedIndex}>
                                  <CircleText>
                                      <>
                                          <b>{headerFormatter(item)}</b>
                                          <br />{mainItemFormatter(item)}
                                      </>
                                  </CircleText>
                              </CircleDivSelector>
                          </div>)
                    })}
                </Carousel>
            </div>
        </ScopedCssBaseline>
  )
}

// eslint-disable-next-line react/prop-types
const CircleDivSelector: React.FunctionComponent<{ children: any, filledCircle: boolean }> = ({ children, filledCircle }) => {
  return (
      <>
          {filledCircle && (<CircleDiv>{children}</CircleDiv>)}
          {!filledCircle && (<DivWithoutCircle>{children}</DivWithoutCircle>)}
      </>
  )
}

export default CarouselMain
