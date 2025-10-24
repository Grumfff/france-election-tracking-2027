import { useIsMobile } from '../hooks/useIsMobile'
import { MobHome } from './mobile/MobHome'
import { WebHome } from './web/WebHome'

export function Majoritaire() {
  const isMobile = useIsMobile()

  return isMobile ? <MobHome /> : <WebHome />
}
