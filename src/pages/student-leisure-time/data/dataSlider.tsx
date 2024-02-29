import {ReactNode} from "react"

import {SlideItem} from "../ui/slide-item"

export interface ISponsors {
  img: string
}

export const dataSponsorsSource_1: ISponsors[][] = [
  [
    {img: "/assets/studentLeisure/художня/1.png"},
    {img: "/assets/studentLeisure/художня/2.png"},
    {img: "/assets/studentLeisure/художня/3.png"},
  ],
]

export let dataSponsors_1: ReactNode[][] = [[]]

Array(dataSponsorsSource_1.length)
  .fill(null)
  .map(() => (dataSponsors_1 = [...dataSponsors_1, []]))

dataSponsorsSource_1.map((e, i) => {
  e.map((el) => {
    const elem = <SlideItem {...el} />
    dataSponsors_1[i] = [...dataSponsors_1[i], elem]
  })
})

export const dataSponsorsSource_2: ISponsors[][] = [
  [
    {img: "/assets/studentLeisure/клуб/1.png"},
    {img: "/assets/studentLeisure/клуб/2.png"},
    {img: "/assets/studentLeisure/клуб/3.png"},
  ],
]

export let dataSponsors_2: ReactNode[][] = [[]]

Array(dataSponsorsSource_2.length)
  .fill(null)
  .map(() => (dataSponsors_2 = [...dataSponsors_2, []]))

dataSponsorsSource_2.map((e, i) => {
  e.map((el) => {
    const elem = <SlideItem {...el} />
    dataSponsors_2[i] = [...dataSponsors_2[i], elem]
  })
})

export const dataSponsorsSource_3: ISponsors[][] = [
  [
    {img: "/assets/studentLeisure/соборність/1.png"},
    {img: "/assets/studentLeisure/соборність/2.png"},
    {img: "/assets/studentLeisure/соборність/3.png"},
    {img: "/assets/studentLeisure/соборність/4.png"},
  ],
]

export let dataSponsors_3: ReactNode[][] = [[]]

Array(dataSponsorsSource_3.length)
  .fill(null)
  .map(() => (dataSponsors_3 = [...dataSponsors_3, []]))

dataSponsorsSource_3.map((e, i) => {
  e.map((el) => {
    const elem = <SlideItem {...el} />
    dataSponsors_3[i] = [...dataSponsors_3[i], elem]
  })
})

export const dataSponsorsSource_4: ISponsors[][] = [
  [
    {img: "/assets/studentLeisure/код/1.png"},
    {img: "/assets/studentLeisure/код/2.png"},
    {img: "/assets/studentLeisure/код/3.png"},
  ],
]

export let dataSponsors_4: ReactNode[][] = [[]]

Array(dataSponsorsSource_4.length)
  .fill(null)
  .map(() => (dataSponsors_4 = [...dataSponsors_4, []]))

dataSponsorsSource_4.map((e, i) => {
  e.map((el) => {
    const elem = <SlideItem {...el} />
    dataSponsors_4[i] = [...dataSponsors_4[i], elem]
  })
})

export const dataSponsorsSource_5: ISponsors[][] = [
  [
    {img: "/assets/studentLeisure/дебют/1.png"},
    {img: "/assets/studentLeisure/дебют/2.png"},
    {img: "/assets/studentLeisure/дебют/3.png"},
  ],
]

export let dataSponsors_5: ReactNode[][] = [[]]

Array(dataSponsorsSource_5.length)
  .fill(null)
  .map(() => (dataSponsors_5 = [...dataSponsors_5, []]))

dataSponsorsSource_5.map((e, i) => {
  e.map((el) => {
    const elem = <SlideItem {...el} />
    dataSponsors_5[i] = [...dataSponsors_5[i], elem]
  })
})

export const dataSponsorsSource_6: ISponsors[][] = [
  [
    {img: "/assets/studentLeisure/різдво/1.png"},
    {img: "/assets/studentLeisure/слово/1.png"},
    {img: "/assets/studentLeisure/театр/1.png"},
  ],
]

export let dataSponsors_6: ReactNode[][] = [[]]

Array(dataSponsorsSource_6.length)
  .fill(null)
  .map(() => (dataSponsors_6 = [...dataSponsors_6, []]))

dataSponsorsSource_6.map((e, i) => {
  e.map((el) => {
    const elem = <SlideItem {...el} />
    dataSponsors_6[i] = [...dataSponsors_6[i], elem]
  })
})
