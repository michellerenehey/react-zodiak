import React from 'react'
import './Main.css'
import ZodiacCard from '../ZodiacCard/ZodiacCard'
import { zodiac } from '../../data'

export default function Main() {
  return (
    <main>
      {zodiac.map((sign) => (
        <ZodiacCard key={sign.name} name={sign.name} dates={sign.dates} />
      ))}
    </main>
  )
}
