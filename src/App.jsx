import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Dataitem from './components/data'
import Dataitem2 from './components/data2'
import './App.css'
function App() {
 
  const items = Dataitem.map(item => {
    return (
      <Card 
          key = {item.id}
          {...item}
      />
    )
  })

  const card2 = Dataitem2.map(card => {
    return (
      <Card 
          key = {card.id}
          {...card}
      />
    )
  })

  return (
    <>
     <Navbar />
     <Hero />
     <section className="cards-list">
          {items}
      </section>

      <section className="cards-list">
            {card2}
      </section>
    </>
  )
}

export default App
