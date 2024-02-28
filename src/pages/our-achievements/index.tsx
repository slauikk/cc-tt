import {FC} from "react"

import {PageItem} from "../../components/page-item"
import {PageLayout} from "../../layouts"

import {dataContent} from "./lib/dataContent"

interface IOurAchievements {}

export const OurAchievements: FC<IOurAchievements> = () => {
  return (
    <PageLayout title="Наші досягнення">
      {dataContent.map((e, i) => (
        <PageItem {...e} key={i} />
      ))}
    </PageLayout>
  )
}
