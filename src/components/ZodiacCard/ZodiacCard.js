import './ZodiacCard.css'

export default function ZodiacCard({ name, dates }) {
  // function redBackground(e) {
  //   e.target.style.background = 'red'
  // }

  // function greenBackground(e) {
  //   e.target.style.background = '#7fb285'
  // }

  return (
    <div className="zodiacCard">
      <img src={`${process.env.PUBLIC_URL}/images/${name}.png`} />
      <span className="name">{name}</span>
      <span>{dates}</span>
    </div>
  )
}
