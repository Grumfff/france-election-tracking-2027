import { useIsMobile } from '../hooks/useIsMobile'
import { Web } from './web/Web'
import { Mobile } from './mobile/Mobile'

export function App() {
  const isMobile = useIsMobile()

  return isMobile ? <Mobile /> : <Web />
}