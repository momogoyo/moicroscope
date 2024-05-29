import React, { CSSProperties } from 'react'
import styled from 'styled-components'

interface MoicroscopeProps {
  url: string
  width: string
  height: string
  customStyle?: CSSProperties
}

const Moicroscope: React.FC<MoicroscopeProps> = ({ 
  url,
  width = '500px',
  height = '300px',
  customStyle = {}
}) => {
  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!event) return
    
    const zoomer = event.currentTarget as HTMLElement
    const offsetX = event.nativeEvent.offsetX
    const offsetY = event.nativeEvent.offsetY
    const x = (offsetX / zoomer.offsetWidth) * 100
    const y = (offsetY / zoomer.offsetHeight) * 100

    zoomer.style.backgroundPosition = `${x}% ${y}%`
  }

  return (
    <Figure onMouseMove={onMouseMove} style={{ backgroundImage: `url(${url})`, width, height, ...customStyle }}>
      <Image src={url} />
    </Figure>
  )
}

const Figure = styled.figure`
  position: relative;
  background-position: 50% 50%;
  overflow: hidden;
  cursor: zoom-in;
`

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s;

  &:hover {
    opacity: 0;
  }
`

export default Moicroscope