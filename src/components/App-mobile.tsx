import { Outlet, Link } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  BottomNavigation,
  BottomNavigationAction,
  Paper
} from '@mui/material'
import { Home as HomeIcon, Info as InfoIcon, Person as PersonIcon } from '@mui/icons-material'

export function AppMobile() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <AppBar position="static" sx={{ zIndex: 1 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mon App
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ flex: 1, overflow: 'auto', pb: 7 }}>
        <Container maxWidth="sm" sx={{ py: 2, px: 2 }}>
          <Outlet />
        </Container>
      </Box>

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation showLabels>
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon />}
            component={Link}
            to="/"
          />
          <BottomNavigationAction
            label="About"
            icon={<PersonIcon />}
            component={Link}
            to="/about"
          />
          <BottomNavigationAction
            label="Info"
            icon={<InfoIcon />}
            component={Link}
            to="/info"
          />
        </BottomNavigation>
      </Paper>

      <TanStackRouterDevtools />
    </Box>
  )
}