import React from 'react'
import BasicTable from './basicTable/BasicTable'
import FilteringTable from "./filteringTable/FilteringTable"

const App = () => {
  return (
    <div>
      <BasicTable/>
      <FilteringTable/>
    </div>
  )
}

export default App