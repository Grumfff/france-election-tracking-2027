import type { FC } from "react"
import { MjMeritChart } from "../../chart/echart/MjMeritChart"
import { WebJmChart } from "./WebJmChart"

export const WebMeritChart: FC = () => {
    return (
        <WebJmChart>
            <MjMeritChart />
        </WebJmChart>
    )
}