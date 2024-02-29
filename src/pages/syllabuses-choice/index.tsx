import clsx from "clsx"
import {FC} from "react"

import {Loading} from "@/components/loading"

import {PageItem} from "../../components/page-item"
import {PageLayout} from "../../layouts"

import styles from "./index.module.scss"
import {getFromGoogleSheets} from "@/utils/geFromGoogleSheets"

interface ISyllabusesChoice {}

export const SyllabusesChoice: FC<ISyllabusesChoice> = () => {
  const googleSheet = getFromGoogleSheets(
    "Дисципліни за вибором здобувача освіти",
  )

  return (
    <PageLayout title="Дисципліни за вибором здобувача освіти">
      {googleSheet.loading && <PageItem content={<Loading />} />}
      {googleSheet.data[0] && (
        <PageItem
          title="Дисципліни за вибором здобувача освіти"
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
