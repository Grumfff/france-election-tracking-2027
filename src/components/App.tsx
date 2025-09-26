import { useIsMobile } from '../hooks/useIsMobile'
import { AppWeb } from './web/App-web'
import { AppMobile } from './mobile/App-mobile'

export function App() {
  const isMobile = useIsMobile()

  return isMobile ? <AppMobile /> : <AppWeb />
}