import React from 'react'
import { pure } from 'recompose'
import { Table } from 'react-bootstrap'

import { CountryTableProps } from '../../types/index'
import Header from '../Header'
import TableRow from '../TableRow'
import './CountryTable.scss'

const CountryTable = ({
  theme,
  data,
  handleClick,
  handleAddCountry,
}: CountryTableProps) => {
  return (
    <Table responsive="md" striped hover>
      <Header handleClick={handleClick}></Header>
      <tbody style={theme} id="table-body">
        {data.map((country: any) => (
          <TableRow
            key={country.name}
            flagURL={country.flag}
            name={country.name}
            languages={country.languages}
            population={country.population}
            region={country.region}
            handleAddCountry={handleAddCountry}
          />
        ))}
      </tbody>
    </Table>
  )
}

export default pure(CountryTable)
