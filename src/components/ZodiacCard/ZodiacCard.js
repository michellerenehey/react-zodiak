import './ZodiacCard.css'

export default function ZodiacCard({ name, dates }) {
  return (
    <div className="zodiacCard">
      <img src={`${process.env.PUBLIC_URL}/images/${name}.png`} />
      <span className="name">{name}</span>
      <span>{dates}</span>
    </div>
  )
}
