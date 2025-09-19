import { useIsMobile } from '../hooks/useIsMobile'
import { AppWeb } from './App-web'
import { AppMobile } from './App-mobile'

export function App() {
  const isMobile = useIsMobile()

  return isMobile ? <AppMobile /> : <AppWeb />
}