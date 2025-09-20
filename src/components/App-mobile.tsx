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
import logoSvg from '../assets/logo.svg'
import JugMaj from "../assets/jugement-majoritaire.svg?react";
import VoteApprobation from "../assets/vote-approbation.svg?react";
import ScrutinUninominal from "../assets/scrutin-uninominal.svg?react";

export function AppMobile() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <AppBar position="static" sx={{ zIndex: 1 }}>
        <Toolbar>
          <Box
            component="img"
            src={logoSvg}
            alt="Logo"
            sx={{ height: 32, width: 32, mr: 2 }}
          />
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

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, bgcolor: 'primary.main' }} elevation={3}>
        <BottomNavigation showLabels sx={{ bgcolor: 'transparent', '& .MuiBottomNavigationAction-root': { color: 'white' }, '& .Mui-selected': { color: 'white !important' } }}>
          <BottomNavigationAction
            label="Scrutin Uninominal"
            icon={<ScrutinUninominal />}
            component={Link}
            to="/"
          />
          <BottomNavigationAction
            label="Vote par Approbation"
            icon={<VoteApprobation />}
            component={Link}
            to="/about"
          />
          <BottomNavigationAction
            label="Jugement Majoritaire"
            icon={<JugMaj />}
            component={Link}
            to="/info"
          />
        </BottomNavigation>
      </Paper>

      <TanStackRouterDevtools />
    </Box>
  )
}