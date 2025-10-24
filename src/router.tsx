import {
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
} from '@tanstack/react-router'
import { App } from './components/App'
import { Majoritaire } from './components/Majoritaire'
import { Uninominal } from './components/Uninominal'
import { InfoDetails } from './components/InfoDetails'

const rootRoute = createRootRoute({
  component: App,
})

const rootIndexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  beforeLoad: () => {
    // eslint-disable-next-line @typescript-eslint/only-throw-error
    throw redirect({ to: '/majoritaire' })
  },
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/majoritaire',
  component: Majoritaire,
})

const infoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/uninominal',
  component: Uninominal,
})

const infoDetailsRoute = createRoute({
  getParentRoute: () => infoRoute,
  path: '/details',
  component: InfoDetails,
})

const routeTree = rootRoute.addChildren([
  rootIndexRoute,
  indexRoute,
  infoRoute.addChildren([infoDetailsRoute])
])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

