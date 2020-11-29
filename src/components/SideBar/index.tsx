/* eslint-disable jsx-a11y/no-onchange */
import React from 'react'
import {
  Grid,
  Menu,
  Segment,
  Sidebar,
  Icon,
  Label,
  Button,
} from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import CountryTable from '../CountryTable'
import Flag from '../Flag'
import SearchBar from '../SearchBar'
import { SideBarProps, AppState } from '../../types'
import { removeCountry } from '../../redux/actions'
// import ThemeSwitch from '../ThemeSwitch'
import { useTheme } from '../../contexts/ThemeContext'
import './SideBar.scss'

// Inline style
const inCartStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
}

const light = {
  backgroundColor: '#E0DDCF',
  color: 'black',
}
const dark = {
  backgroundColor: '#C5BAAF',
  color: 'white',
}

const SideBar = ({
  inCart,
  isFiltered,
  filtered,
  all,
  handleClick,
  handleAddCountry,
  handleChange,
}: SideBarProps) => {
  const [visible, setVisible] = React.useState(false)
  const dispatch = useDispatch()
  const { theme, setTheme } = useTheme()!
  const countriesInCart = useSelector((state: AppState) => state.country.inCart)
  let count = countriesInCart.length

  const isEmpty = (): boolean => {
    if (count !== 0) {
      if (visible === false) return false
      else if (visible === true) return true
    } else if (count === 0) {
      return false
    }
    return false
  }

  const changeTheme = () => {
    if (theme === 'light') return light
    else return dark
  }

  return (
    <Grid columns={1}>
      <Grid.Column>
        <div id="nav-container" style={changeTheme()}>
          <SearchBar handleChange={handleChange} />
          {/* <select value={theme} onChange={}>
            <option value="white">White</option>
            <option value="lightblue">Blue</option>
            <option value="lightgreen">Green</option>
          </select> */}
          <Button.Group>
            <Button
              style={light}
              onClick={(e) => setTheme(e.currentTarget.value)}
              value="light"
            >
              <Icon name="sun" />
            </Button>
            <Button.Or />
            <Button
              style={dark}
              onClick={(e) => setTheme(e.currentTarget.value)}
              value="dark"
            >
              <Icon name="moon" />
            </Button>
          </Button.Group>
          <Button onClick={() => setVisible(true)} as="div">
            <Button color="red">
              <Icon name="shopping cart" />
            </Button>
            <Label as="a" basic color="red" pointing="left">
              {count}
            </Label>
          </Button>
        </div>
      </Grid.Column>

      <Grid.Column>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            direction="right"
            icon="labeled"
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={isEmpty()}
            width="thin"
            style={changeTheme()}
          >
            {inCart ? (
              inCart.map((c: any) => (
                <Menu.Item style={inCartStyle} key={c.key} as="div">
                  <Flag imageURL={c.flagURL} />
                  {/* <p style={pStyle}>{c.name}</p> */}
                  <Link to={`/countries/${c.name}`}>{c.name}</Link>
                  <Button onClick={() => dispatch(removeCountry(c))}>
                    Remove
                  </Button>
                </Menu.Item>
              ))
            ) : (
              <p>Nothing in cart</p>
            )}
          </Sidebar>
          <Sidebar.Pusher dimmed={isEmpty()}>
            <Segment basic>
              {isFiltered ? (
                <div className="table-container">
                  <CountryTable
                    theme={changeTheme()}
                    data={filtered}
                    handleClick={handleClick}
                    handleAddCountry={handleAddCountry}
                  />
                </div>
              ) : (
                <div className="table-container">
                  <CountryTable
                    theme={changeTheme()}
                    data={all}
                    handleClick={handleClick}
                    handleAddCountry={handleAddCountry}
                  />
                </div>
              )}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  )
}

export default SideBar
