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
      {googleSheet.loading && <PageItem content={<Loading />} />}
      {googleSheet.data[0] && (
        <PageItem
          content={googleSheet.data.map((e, i) => (
            <p key={i}>
              <a target="_blank" href={e[1]}>
                {e[0]}
              </a>
            </p>
          ))}
        />
      )}
    </PageLayout>
  )
}
