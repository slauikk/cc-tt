import clsx from "clsx"
import {FC, ReactNode} from "react"

import styles from "./index.module.scss"
import {SliderLine} from "./slider-line"

interface ISlider {
    type: "row" | "col"
    items: ReactNode[][]
    className?: string
    speedMultiplayer?: number
}

export const Slider: FC<ISlider> = ({
    items,
    type,
    className,
    speedMultiplayer,
}) => {
    return (
        <div className={clsx(styles.Slider, styles[type], className)}>
            {items.map((e, i) => (
                <SliderLine
                    items={e}
                    type={type}
                    speedMultiplayer={speedMultiplayer}
                    index={i}
                    key={i}
                />
            ))}
        </div>
    )
}
