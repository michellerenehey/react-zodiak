import React from 'react'
import './Main.css'
import ZodiacCard from '../ZodiacCard/ZodiacCard'
import { zodiac } from '../../data'
import background from '../../stars.gif'

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {zodiac.map((sign) => (
        <ZodiacCard key={sign.name} name={sign.name} dates={sign.dates} />
      ))}
    </main>
  )
}
