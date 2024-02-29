import clsx from "clsx"
import {FC} from "react"

import {ISponsors} from "../../data/dataSlider"

import styles from "./index.module.scss"

interface ISlideItemProps extends ISponsors {}

export const SlideItem: FC<ISlideItemProps> = ({img}) => {
  return (
    <div className={clsx(styles.SlideItem)}>
      <img src={img} alt="" />
    </div>
  )
}
