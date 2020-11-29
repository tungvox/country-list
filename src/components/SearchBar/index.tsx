import React from 'react'
import PropTypes from 'prop-types'
import { pure } from 'recompose'

import { SearchBarProps } from '../../types'
import './SearchBar.scss'

const SearchBar = ({ handleChange }: SearchBarProps) => {
  return (
    <div className="search-bar">
      <input
        id="my-input"
        type="text"
        onChange={(e) => handleChange(e)}
        placeholder="Search by name..."
      />
    </div>
  )
}

export default pure(SearchBar)

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
}
