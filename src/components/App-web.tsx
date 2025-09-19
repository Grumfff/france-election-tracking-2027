import { Outlet, Link } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container
} from '@mui/material'
import logoSvg from '../assets/logo.svg'

export function AppWeb() {
  const buttonStyle = { color: 'primary' as const, variant: 'contained' as const, sx: { mr: 2 } };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <AppBar position="static" sx={{ bgcolor: 'white', color: 'black' }}>
        <Toolbar>
          <Box
            component="img"
            src={logoSvg}
            alt="Logo"
            sx={{ height: 72, width: 72, mr: 2 }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
            JM Tracker - 2027
          </Typography>
          <Button component={Link} to="/" {...buttonStyle}>
            Scrutin Uninominal
          </Button>
          <Button component={Link} to="/about" {...buttonStyle}>
            Vote par Approbation
          </Button>
          <Button component={Link} to="/info" {...buttonStyle}>
            Jugement Majoritaire
          </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        <Container maxWidth="lg" sx={{ py: 3, flex: 1 }}>
          <Outlet />
        </Container>
      </Box>

      <TanStackRouterDevtools />
    </Box>
  )
}