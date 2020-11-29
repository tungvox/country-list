import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Routes from './Routes'
import useFetch from './hooks/useFetch'

export default function App() {
  // eslint-disable-next-line
  const [countries, error] = useFetch()

  return (
    <div className="App">
      <Routes countries={countries} />
    </div>
  )
}
