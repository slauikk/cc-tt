import clsx from "clsx"
import {FC} from "react"

import {Loading} from "@/components/loading"

import {PageItem} from "../../components/page-item"
import {PageLayout} from "../../layouts"

import styles from "./index.module.scss"
import {getFromGoogleSheets} from "@/utils/geFromGoogleSheets"

interface ISyllabuses {}

export const Syllabuses: FC<ISyllabuses> = () => {
  const googleSheet = getFromGoogleSheets("Дисципліни")
  const googleSheet_2 = getFromGoogleSheets("Дисципліни за вибором здобувача")

  return (
    <PageLayout title="Дисципліни (силабуси)">
      {googleSheet.loading && googleSheet_2.loading && (
        <PageItem content={<Loading />} />
      )}
      {googleSheet.data[0] && (
        <PageItem
          title="Дисципліни"
          content={googleSheet.data.map((e, i) => (
            <p key={i}>
              <a target="_blank" href={e[1]}>
                {e[0]}
              </a>
            </p>
          ))}
        />
      )}
      {googleSheet_2.data[0] && (
        <PageItem
          title="Дисципліни за вибором здобувача"
          content={googleSheet_2.data.map((e, i) => (
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
