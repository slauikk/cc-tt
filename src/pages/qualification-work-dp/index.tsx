import clsx from "clsx"
import {FC} from "react"

import {Loading} from "@/components/loading"

import {PageItem} from "../../components/page-item"
import {PageLayout} from "../../layouts"

import styles from "./index.module.scss"
import {dataContent} from "./lib/dataContent"
import {getFromGoogleSheets} from "@/utils/geFromGoogleSheets"

interface IQualificationWorkDp {}

export const QualificationWorkDp: FC<IQualificationWorkDp> = () => {
  const googleSheet = getFromGoogleSheets("Методичні вказівки")

  return (
    <PageLayout title="Виконання кваліфікаційної роботи у вигляді дипломного проекту">
      {dataContent.map((e, i) => (
        <PageItem {...e} key={i} />
      ))}
    </PageLayout>
  )
}
