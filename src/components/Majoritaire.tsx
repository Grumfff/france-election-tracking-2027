import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useIsMobile } from '../hooks/useIsMobile'
import { loadMajorityJugmentData } from '../store/jm-slice/jm-slice'
import type { AppDispatch, RootState } from '../store/store'
import { MobMajoritaire } from './mobile/MobMajoritaire'
import { WebMajoritaire } from './web/WebMajoritaire'

export function Majoritaire() {
  const isMobile = useIsMobile()
  const dispatch = useDispatch<AppDispatch>()
  const jmData = useSelector((state: RootState) => state.majorityJudgment.jmData)

  useEffect(() => {
    // Ne charger que si les données ne sont pas déjà présentes
    if (Object.keys(jmData).length === 0) {
      console.log('Dispatch loadMajorityJugmentData from Majoritaire')
      dispatch(loadMajorityJugmentData())
    }
  }, [dispatch, jmData])
  console.log('jmData dans Majoritaire:' , jmData);

  return isMobile ? <MobMajoritaire /> : <WebMajoritaire />
}
