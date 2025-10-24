import { useIsMobile } from '../hooks/useIsMobile'
import { MobHome } from './mobile/MobHome'
import { WebHome } from './web/WebHome'

export function Home() {
  const isMobile = useIsMobile()

  return isMobile ? <MobHome /> : <WebHome />
}
