import type { FC } from "react"
import { MjTimeMeritChart } from "../../chart/echart/MjTimeMerit"
import { WebJmChart } from "./WebJmChart"

export const WebTimeMeritChart: FC = () => {
    return (
        <WebJmChart>
            <MjTimeMeritChart />
        </WebJmChart>
    )
}