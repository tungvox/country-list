import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Product, AppState, RoutesProps } from '../../types/index'
import { addProduct, removeProduct } from '../../redux/actions'
import Main from '../../components/Main'

export default function Home({ countries }: RoutesProps) {
  return (
    <>
      <Main countries={countries} />
    </>
  )
}
