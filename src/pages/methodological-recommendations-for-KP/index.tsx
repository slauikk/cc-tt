import clsx from "clsx"
import {FC} from "react"

import {Loading} from "@/components/loading"

import {PageItem} from "../../components/page-item"
import {PageLayout} from "../../layouts"

import styles from "./index.module.scss"
import {dataContent} from "./lib/dataContent"
import {getFromGoogleSheets} from "@/utils/geFromGoogleSheets"

interface IMethodologicalKP {}

export const MethodologicalKP: FC<IMethodologicalKP> = () => {
  const googleSheet = getFromGoogleSheets("Методичні рекомендації")

  return (
    <PageLayout title="Методичні рекомендації до КР">
      {dataContent.map((e, i) => (
        <PageItem {...e} key={i} />
      ))}
    </PageLayout>
  )
}
