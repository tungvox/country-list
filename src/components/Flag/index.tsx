import React from 'react'
import PropTypes from 'prop-types'
import { pure } from 'recompose'

import { FlagProps } from '../../types'
import './Flag.scss'

const Flag = ({ imageURL }: FlagProps) => {
  return <img className="flag" alt="Flag" src={imageURL} />
}

export default pure(Flag)

Flag.propTypes = {
  imageURL: PropTypes.string.isRequired,
}
