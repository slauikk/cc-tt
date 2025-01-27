import clsx from "clsx"
import {FC} from "react"

import {Loading} from "@/components/loading"

import {PageItem} from "../../components/page-item"
import {PageLayout} from "../../layouts"

import styles from "./index.module.scss"
import {getFromGoogleSheets} from "@/utils/geFromGoogleSheets"
import {dataContent} from "@/pages/syllabuses/lib/dataContent.tsx"

interface ISyllabuses {}

export const Syllabuses: FC<ISyllabuses> = () => {
  const googleSheet = getFromGoogleSheets("Дисципліни")
  const googleSheet_2 = getFromGoogleSheets("Дисципліни за вибором здобувача")

  return (
    <PageLayout title="Дисципліни (силабуси)">
      {dataContent.map((e, i) => (
        <PageItem {...e} key={i} />
      ))}
    </PageLayout>
  )
}
