import { CSSProperties } from 'react'

// Prop types
export type CountryTableProps = {
  theme: CSSProperties
  data: any
  handleClick: Function
  handleAddCountry: Function
}

export type FlagProps = {
  imageURL: string
}

export type HeaderProps = {
  handleClick: Function
}

export type SearchBarProps = {
  handleChange: Function
}

export type TableRowProps = {
  key: string
  name: string
  flagURL: string
  languages: any
  population: number
  region: string
  handleAddCountry: Function
}

export type RoutesProps = {
  countries: any
}

export type SideBarProps = {
  inCart: any
  isFiltered: boolean
  filtered: any
  all: any
  handleClick: Function
  handleAddCountry: Function
  handleChange: Function
}

// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

//A country
export type Country = {
  key: string
  flagURL: string
  name: string
  languages: any
  population: number
  region: string
}

export type AddCountryAction = {
  type: typeof ADD_COUNTRY
  payload: {
    country: Country
  }
}

export type RemoveCountryAction = {
  type: typeof REMOVE_COUNTRY
  payload: {
    country: Country
  }
}

// A product
export type Product = {
  id: string
  name: string
  price: number
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type UiActions = ToggleDialogAction

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

export type CountryActions = AddCountryAction | RemoveCountryAction

export type ProductState = {
  inCart: Product[]
}

export type CountryState = {
  inCart: Country[]
}

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

export type AppState = {
  product: ProductState
  country: CountryState
  ui: UiState
}
