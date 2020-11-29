/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useState, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'

import SearchBar from '../SearchBar'
import CountryTable from '../CountryTable'
import useFetch from '../../hooks/useFetch'
import SideBar from '../SideBar'
import { RoutesProps, Country, AppState } from '../../types'
import './Main.scss'
import { addCountry } from '../../redux/actions'
import ThemeProvider, { useTheme } from '../../contexts/ThemeContext'

const Main = ({ countries }: RoutesProps) => {
  const [keyword, setKeyword] = useState('')
  const [filter, setFilter] = useState('Name')
  const [isFiltered, setIsFiltered] = useState(false)
  const [filtered, setFiltered] = useState([])
  const [order, setOrder] = useState(false)
  const dispatch = useDispatch()
  const countriesInCart = useSelector((state: AppState) => state.country.inCart)
  // const [allCountries, setAllCountries] = useState(countries);
  // const res = useFetch(, {});
  // if (!res.response) {
  //     return <div>Loading...</div>
  // }
  // const countries = res.response;
  // console.log(countries)

  // function to handle sorting
  const handleClick = useCallback(
    (filter) => {
      if (filter.toLowerCase() === 'flag') {
        return null
      } else {
        if (!isFiltered) {
          setIsFiltered(true)
        }
        switch (filter.toLowerCase()) {
        case 'name':
          setOrder(!order)
          const sortByName: any = [...countries].sort((a: any, b: any) => {
            return order
              ? a.name.localeCompare(b.name)
              : b.name.localeCompare(a.name)
          })
          setFiltered(sortByName)
          break

        case 'languages':
          setOrder(!order)
          const sortByLanguages: any = [...countries].sort(
            (a: any, b: any) => {
              return order
                ? a.languages[0].name.localeCompare(b.languages[0].name)
                : b.languages[0].name.localeCompare(a.languages[0].name)
            }
          )
          setFiltered(sortByLanguages)
          break

        case 'population':
          setOrder(!order)
          const sortByPopulation: any = [...countries].sort(
            (a: any, b: any) => {
              return order
                ? a.population - b.population
                : b.population - a.population
            }
          )
          setFiltered(sortByPopulation)
          break

        case 'region':
          setOrder(!order)
          const sortByRegion: any = [...countries].sort((a: any, b: any) => {
            return order
              ? a.region.localeCompare(b.region)
              : b.region.localeCompare(a.region)
          })
          setFiltered(sortByRegion)
          break
        default:
          setFiltered([])
        }
      }
    },
    [countries, isFiltered, order]
  )

  // function to handle searching
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setKeyword(e.target.value)

    let input: string,
      filter: string,
      tableBody: HTMLElement,
      row: NodeListOf<HTMLElement>,
      i: number,
      countryName: string
    input = e.target.value
    filter = input.toUpperCase()
    tableBody = document.getElementById('table-body') as HTMLElement
    row = (tableBody.getElementsByClassName(
      'table-row'
    ) as unknown) as NodeListOf<HTMLElement>
    for (i = 0; i < row.length; i++) {
      countryName = (row[i].getElementsByClassName(
        'country-name-text'
      )[0] as HTMLElement).innerText
      if (countryName.toUpperCase().indexOf(filter) > -1) {
        row[i].style.display = ''
      } else {
        row[i].style.display = 'none'
      }
    }
  }

  //function to add country to shopping cart
  const handleAddCountry = (chosenCountry: any) => {
    const country: Country = {
      key: chosenCountry.name,
      name: chosenCountry.name,
      flagURL: chosenCountry.flag,
      languages: chosenCountry.languages,
      population: chosenCountry.population,
      region: chosenCountry.region,
    }
    console.log(country)
    dispatch(addCountry(country))
  }

  return (
    <div className="main">
      <ThemeProvider>
        <SideBar
          inCart={countriesInCart}
          isFiltered={isFiltered}
          filtered={filtered}
          all={countries}
          handleClick={handleClick}
          handleAddCountry={handleAddCountry}
          handleChange={handleChange}
        />
      </ThemeProvider>
    </div>
  )
}

export default Main
