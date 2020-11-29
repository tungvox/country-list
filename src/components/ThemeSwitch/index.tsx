import React from 'react'

const ThemeSwitch = (theme: string, setTheme: Function) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-onchange
    <select value={theme} onChange={(e) => setTheme(e.currentTarget.value)}>
      <option value="white">White</option>
      <option value="lightblue">Blue</option>
      <option value="lightgreen">Green</option>
    </select>
  )
}

export default ThemeSwitch
