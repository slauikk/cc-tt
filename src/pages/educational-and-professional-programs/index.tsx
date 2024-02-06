import clsx from "clsx"
import {FC} from "react"

import {Loading} from "@/components/loading"

import {PageItem} from "../../components/page-item"
import {PageLayout} from "../../layouts"

import styles from "./index.module.scss"
import {dataContent} from "./lib/dataContent"
import {getFromGoogleSheets} from "@/utils/geFromGoogleSheets"

interface IEducationalPrograms {}

export const EducationalPrograms: FC<IEducationalPrograms> = () => {
  const googleSheet = getFromGoogleSheets("Освітньо-професійні програми")

  return (
    <PageLayout title="Освітньо-професійні програми">
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
