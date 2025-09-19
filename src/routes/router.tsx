import {
  Outlet,
  Link,
  createRouter,
  createRoute,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container
} from '@mui/material'
import { Home } from '../components/Home'
import { About } from '../components/About'
import { Info } from '../components/Info'
import { InfoDetails } from '../components/InfoDetails'

const rootRoute = createRootRoute({
  component: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mon App
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/info">
            Info
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
  ),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

const infoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/info',
  component: Info,
})

const infoDetailsRoute = createRoute({
  getParentRoute: () => infoRoute,
  path: '/details',
  component: InfoDetails,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  infoRoute.addChildren([infoDetailsRoute])
])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

