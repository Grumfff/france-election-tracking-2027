import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { RouterProvider } from '@tanstack/react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './router.tsx'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      // main: '#2400ff',
      main: '#4327f8ff',
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
