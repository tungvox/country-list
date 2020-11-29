import React from 'react'
import Flag from '../Flag'
import { pure } from 'recompose'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import { TableRowProps, AppState, Country } from '../../types'
import './TableRow.scss'
// import PropTypes from 'prop-types';

const TableRow = ({
  key,
  name,
  flagURL,
  languages,
  population,
  region,
  handleAddCountry,
}: TableRowProps) => {
  const lang = languages
  const chosenCountry = {
    key: key,
    name: name,
    flag: flagURL,
    languages: languages,
    population: population,
    region: region,
  }

  const countriesInCart = useSelector((state: AppState) => state.country.inCart)

  const added = (name: string) => {
    if (countriesInCart.find((country: Country) => country.name === name)) {
      return true
    }
    return false
  }
  return (
    <tr className="table-row">
      <td className="align-middle">
        <Flag imageURL={flagURL}></Flag>
      </td>
      <td className="country-name-text align-middle">
        <Link to={`/countries/${name}`}>{name}</Link>
      </td>
      <td className="align-middle">
        {lang.map((lang: any) => {
          return (
            <li className="languages" key={lang.name}>
              {lang.name}
            </li>
          )
        })}
      </td>
      <td className="align-middle">
        {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </td>
      <td className="align-middle">{region}</td>
      <td className="align-middle">
        <Button
          disabled={added(name)}
          onClick={() => {
            handleAddCountry(chosenCountry)
          }}
          variant="info"
        >
          Add
        </Button>
      </td>
    </tr>
  )
}

export default pure(TableRow)

// TableRow.propTypes = {
//   key: PropTypes.string.isRequired,
//   flagURL: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   language: PropTypes.array,
//   population: PropTypes.number.isRequired,
//   region: PropTypes.string.isRequired,
//   handleAddCountry: PropTypes.func.isRequired
// }
