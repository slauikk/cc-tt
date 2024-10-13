
import { FC } from "react";



import { PageItem } from "../../components/page-item";
import { PageLayout } from "../../layouts";
import { dataContent } from "./lib/dataContent";
interface IPractices {}

export const Practices: FC<IPractices> = () => {


  return (
    <PageLayout title="Практики">

        <PageItem content={dataContent[0].content} />

    </PageLayout>
  );
};
