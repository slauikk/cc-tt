"use client"

import {useGSAP} from "@gsap/react"
import clsx from "clsx"
import gsap from "gsap"
import {ReactNode, useRef} from "react"

import style from "./index.module.scss"

interface ISliderLineProps {
  items: ReactNode[]
  type: "row" | "col"
  index: number
  speedMultiplayer?: number
}

export const SliderLine: React.FunctionComponent<ISliderLineProps> = ({
  items,
  type,
  index,
  speedMultiplayer = 1,
}) => {
  const refRoot = useRef<HTMLDivElement | null>(null)
  const refItems = useRef<HTMLDivElement[] | null[]>([])

  const direction = index % 2 == 0 ? "to-right" : "to-left"

  const tl = useRef<gsap.core.Timeline>()

  useGSAP(() => {
    setTimeout(() => {
      let translateDistance: number = 0

      const root = refRoot.current

      if (root) {
        let decrement = 0

        if (index % 2 == 0 && refItems.current[0]) {
          decrement = refItems.current[0].clientWidth / 2
        }

        const rootComputedStyles = window.getComputedStyle(root)
        let rootGap = parseFloat(rootComputedStyles.gap)

        translateDistance += refItems.current.length * rootGap

        if (type == "col") {
          refItems.current.map((e) => {
            const calc = e ? e.clientHeight : 0

            translateDistance += calc
          })

          tl.current = gsap
            .timeline({
              repeat: -1,
              paused: true,
              defaults: {
                duration: refItems.current.length * 3,
                ease: "power0",
              },
            })
            .fromTo(
              root,
              {
                y: 0,
              },
              {
                y: -translateDistance / 2,
              },
            )
        } else {
          refItems.current.map((e) => {
            const calc = e ? e.clientWidth : 0
            translateDistance += calc
          })

          tl.current = gsap
            .timeline({
              repeat: -1,
              defaults: {
                duration: refItems.current.length * 3 * speedMultiplayer,
                ease: "power0",
              },
            })
            .fromTo(
              root,
              {
                x: 0 - decrement,
              },
              {
                x:
                  direction == "to-right"
                    ? -translateDistance / 2 - decrement
                    : translateDistance / 2 - decrement,
              },
            )
        }
      }
    }, 200)
  }, [])

  return (
    <div
      className={clsx(style.SliderLine, style[type], style[direction])}
      ref={refRoot}
    >
      {[...items, ...items, ...items, ...items].map((e, i) => (
        <div
          className={clsx(style.SliderLine_photo)}
          ref={(el) => (refItems.current[i] = el)}
          key={i}
        >
          {e}
        </div>
      ))}
    </div>
  )
}
