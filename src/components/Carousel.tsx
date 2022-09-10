import React, { FunctionComponent, useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
// @ts-expect-error
import leftHandSideArrow from './../img/arrow_left.svg'
// @ts-expect-error
import rightHandSideArrow from './../img/arrow_right.svg'

// interface CaroselParams {
//   children: any
//   max_width?: number
// }

const ContainerRelativo = styled.div`
  position: relative;
  width: 100%;
`

const Container = styled.div`
  margin: auto;
  width: 90vw;
  overflow-x: scroll;
  display: flex;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  .buttons {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    width: 100%;
    button {
      background: #00000000;
      border: none;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
    .prev {
      transform: translateX(10px);
    }
    .next {
      transform: translateX(-10px);
    }
  }
`

/**
 * Componente de Carosel simples. Para utilizar  certifique-se de que os childrens tem a mesma largura(width), para ter uma maior experiencia.
 * @param param0 {CaroselParams}
 * @returns {JSX.Element}
 */

const Carosel: FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  const Carousel = useRef<{ scrollLeft: number, children: any }>(null)

  const [stateCarosel, setStateCarousel] = useState<{width_childrens: number }>()

  const handleCarousel = useCallback(() => {
    if (Carousel.current) {
      const carousel = Carousel.current
      setStateCarousel(
        {
          ...stateCarosel,
          width_childrens: carousel.children.item(0)?.clientWidth
        }
      )
    }
  }, [setStateCarousel])

  const handleCarouselAction = (e): void => {
    e.preventDefault()

    switch (e.currentTarget.id) {
      case 'next':
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        // @ts-expect-error
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        Carousel.current.scrollLeft += stateCarosel.width_childrens
        break

      case 'prev':
        // eslint-disable-next-line no-return-assign
        // @ts-expect-error
        Carousel.current.scrollLeft -= stateCarosel.width_childrens
        break
      default: {
        break
      }
    }
  }

  useEffect(() => handleCarousel(), [handleCarousel])

  return (
        <ContainerRelativo>
            <Container ref={Carousel}>
                {children}
                <div className="buttons">
                    <button onClick={handleCarouselAction} id="prev" className="prev"><img src={leftHandSideArrow} alt="Left arrow" /></button>
                    <button onClick={handleCarouselAction} id="next" className="next"><img src={rightHandSideArrow} alt="Right arrow" /></button>
                </div>
            </Container>
        </ContainerRelativo>
  )
}

export default Carosel
