import React from 'react'
import './ZodiacCard.css'

export default function ZodiacCard(props) {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/images/${props.name}.png`} />
      <span>{props.name}</span>
      <span>{props.dates}</span>
    </div>
  )
}
