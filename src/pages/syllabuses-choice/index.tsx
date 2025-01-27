import clsx from "clsx"
import {FC} from "react"

import {Loading} from "@/components/loading"

import {PageItem} from "../../components/page-item"
import {PageLayout} from "../../layouts"

import styles from "./index.module.scss"
import {getFromGoogleSheets} from "@/utils/geFromGoogleSheets"
import {dataContent} from "@/pages/syllabuses-choice/lib/dataContent.tsx"

interface ISyllabusesChoice {}

export const SyllabusesChoice: FC<ISyllabusesChoice> = () => {
  const googleSheet = getFromGoogleSheets(
    "Дисципліни за вибором здобувача освіти",
  )

  return (
    <PageLayout title="Дисципліни за вибором здобувача освіти">
      {dataContent.map((e, i) => (
        <PageItem {...e} key={i} />
      ))}
    </PageLayout>
  )
}
