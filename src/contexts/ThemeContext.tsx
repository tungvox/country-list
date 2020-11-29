import React from 'react'

const defaultTheme = 'light'
type ThemeContextType = {
  theme: string
  setTheme: (value: string) => void
}
const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
)

type Props = {
  children: React.ReactNode
}

export const useTheme = () => React.useContext(ThemeContext)

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = React.useState(defaultTheme)

  React.useEffect(() => {
    // We'd get the theme from a web API / local storage in a real app
    // We've hardcoded the theme in our example
    const currentTheme = 'light'
    setTheme(currentTheme)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
