import './App.css'

import { useState, useEffect } from 'react'
import { Tabs, Tab } from 'react-bootstrap'

import PlanetList from './Components/PlanetList'
import FavList from './Components/FavList'

function App() {

  const [planets, setPlanets] = useState([])

  const getPlanets = async () => {
    let planetsResponse = await (await fetch(' https://assignment-machstatz.herokuapp.com/planet')).json()
    setPlanets(planetsResponse)
  }

  const handleFavToggle = (id) => {
    if (id) {
      setPlanets(planets.map(p => {
        if (p.id === id)
          return {
            ...p, isFavourite: !p.isFavourite
          }
        return p
      }))
    }
  }

  const handleReset = () => {
    setPlanets(planets.map(p => {
      return {
        ...p, isFavourite: false
      }
    }))
  }

  useEffect(() => {
    if (!localStorage.getItem('planetList')) {
      getPlanets()
    } else {
      setPlanets(JSON.parse(localStorage.getItem('planetList')))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('planetList', JSON.stringify(planets))
  }, [planets])

  return (
    <>
      <h1 className='header'>Planets</h1>
      <Tabs defaultActiveKey="planets" id="uncontrolled-tab-example" className='nav-justified '>
        <Tab eventKey="planets" title="Planets">
          <PlanetList planets={planets} handleFavToggle={handleFavToggle} />
        </Tab>

        <Tab eventKey="favourites" title="My favourites">
          <FavList planets={planets} handleFavToggle={handleFavToggle} handleReset={handleReset} />
        </Tab>
      </Tabs>
    </>
  );
}

export default App;
