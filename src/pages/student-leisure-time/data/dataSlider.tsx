import {ReactNode} from "react"

import {SlideItem} from "../ui/slide-item"

export interface ISponsors {
  img: string
}

export const dataSponsorsSource: ISponsors[][] = [
  [
    {img: "/assets/it/1.png"},
    {img: "/assets/it/2.png"},
    {img: "/assets/it/3.png"},
    {img: "/assets/it/4.png"},
    {img: "/assets/it/5.png"},
    {img: "/assets/it/6.png"},
    {img: "/assets/it/7.png"},
    {img: "/assets/it/8.png"},
    {img: "/assets/it/9.png"},
  ],
]

export let dataSponsors: ReactNode[][] = [[]]

Array(dataSponsorsSource.length)
  .fill(null)
  .map(() => (dataSponsors = [...dataSponsors, []]))

dataSponsorsSource.map((e, i) => {
  e.map((el, idx) => {
    const elem = <SlideItem {...el} />
    dataSponsors[i] = [...dataSponsors[i], elem]
  })
})

export const dataSponsorsSourceMagnis: ISponsors[][] = [
  [
    {img: "/assets/magnis/1.png"},
    {img: "/assets/magnis/2.png"},
    {img: "/assets/magnis/3.png"},
  ],
]

export let dataSponsorsMagnis: ReactNode[][] = [[]]

Array(dataSponsorsSourceMagnis.length)
  .fill(null)
  .map(() => (dataSponsorsMagnis = [...dataSponsorsMagnis, []]))

dataSponsorsSourceMagnis.map((e, i) => {
  e.map((el, idx) => {
    const elem = <SlideItem {...el} />
    dataSponsorsMagnis[i] = [...dataSponsorsMagnis[i], elem]
  })
})

export const dataSponsorsSourceEleks: ISponsors[][] = [
  [{img: "/assets/eleks/1.png"}, {img: "/assets/eleks/2.png"}],
]

export let dataSponsorsEleks: ReactNode[][] = [[]]

Array(dataSponsorsSourceEleks.length)
  .fill(null)
  .map(() => (dataSponsorsEleks = [...dataSponsorsEleks, []]))

dataSponsorsSourceEleks.map((e, i) => {
  e.map((el, idx) => {
    const elem = <SlideItem {...el} />
    dataSponsorsEleks[i] = [...dataSponsorsEleks[i], elem]
  })
})

export const dataSponsorsSourceHourOfCode: ISponsors[][] = [
  [
    {img: "/assets/hour-of-code/1.png"},
    {img: "/assets/hour-of-code/2.png"},
    {img: "/assets/hour-of-code/3.png"},
  ],
]

export let dataSponsorsHourOfCode: ReactNode[][] = [[]]

Array(dataSponsorsSourceHourOfCode.length)
  .fill(null)
  .map(() => (dataSponsorsHourOfCode = [...dataSponsorsHourOfCode, []]))

dataSponsorsSourceHourOfCode.map((e, i) => {
  e.map((el, idx) => {
    const elem = <SlideItem {...el} />
    dataSponsorsHourOfCode[i] = [...dataSponsorsHourOfCode[i], elem]
  })
})

export const dataSponsorsSourceElogic: ISponsors[][] = [
  [
    {img: "/assets/elogic/1.png"},
    {img: "/assets/elogic/2.png"},
    {img: "/assets/elogic/3.png"},
    {img: "/assets/elogic/4.png"},
  ],
]

export let dataSponsorsElogic: ReactNode[][] = [[]]

Array(dataSponsorsSourceElogic.length)
  .fill(null)
  .map(() => (dataSponsorsElogic = [...dataSponsorsElogic, []]))

dataSponsorsSourceElogic.map((e, i) => {
  e.map((el, idx) => {
    const elem = <SlideItem {...el} />
    dataSponsorsElogic[i] = [...dataSponsorsElogic[i], elem]
  })
})
