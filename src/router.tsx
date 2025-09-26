import {
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router'
import { App } from './components/App'
import { Home } from './components/Home'
import { Info } from './components/Info'
import { InfoDetails } from './components/InfoDetails'

const rootRoute = createRootRoute({
  component: App,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
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
  infoRoute.addChildren([infoDetailsRoute])
])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

