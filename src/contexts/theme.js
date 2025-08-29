import { createContext, useContext } from "react";

// Create a ThemeContext with default values
export const ThemeContext = createContext({
    themeMode: "light",      // Default theme mode
    darkTheme: () => {},     // Function to switch to dark theme (placeholder)
    lightTheme: () => {},    // Function to switch to light theme (placeholder)
})

// Export the ThemeProvider for wrapping components
export const ThemeProvider = ThemeContext.Provider

// Custom hook to use the ThemeContext
export default function useTheme(){
    return useContext(ThemeContext)
}