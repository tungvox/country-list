import React from 'react'
import PropTypes from 'prop-types'
import { pure } from 'recompose'

import { HeaderProps } from '../../types'
import './Header.scss'

const sortableStyle = {
  cursor: 'pointer',
}

const Header = ({ handleClick }: HeaderProps) => {
  const headerName = [
    'Flag',
    'Name',
    'Languages',
    'Population',
    'Region',
    'Add to cart',
  ]
  return (
    <thead>
      <tr>
        {headerName.map((name: string) => {
          if (name !== 'Flag' && name !== 'Add to cart') {
            return (
              <th
                key={name}
                className="sortable-header"
                style={sortableStyle}
                onClick={() => handleClick(name)}
              >
                {name} <i className="fas fa-sort"></i>
              </th>
            )
          } else return <th key={name}>{name}</th>
        })}
      </tr>
    </thead>
  )
}

export default pure(Header)

Header.propTypes = {
  handleClick: PropTypes.func.isRequired,
}
