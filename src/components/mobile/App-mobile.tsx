import { Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import {
  Box,
} from '@mui/material'

import { AppBanner } from './AppBanner';
import { AppCommand } from './AppCommand';

export function AppMobile() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <AppBanner/> 
      <Box sx={{ flex: 1, display: 'flex'}}>
          <Outlet />
      </Box>

      <AppCommand></AppCommand>

      <TanStackRouterDevtools />
    </Box>
  )
}