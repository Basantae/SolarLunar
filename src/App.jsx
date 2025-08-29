import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import React from 'react'

function App() {
  // State to track current theme mode ("light" or "dark")
  const [themeMode, setThemeMode] = useState("light")

  // Function to set light theme
  const lightTheme = () => {
    setThemeMode("light")
  }

  // Function to set dark theme
  const darkTheme = () => {
    setThemeMode("dark")
  }

  // Effect to update the HTML class based on themeMode
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  
  return(
    // Provide theme context to child components
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              {/* Theme switch button */}
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              {/* Card component */}
              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App