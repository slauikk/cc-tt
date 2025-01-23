import {Slider} from "@/components/Slider"
import {Images} from "@/components/images"
import {
  dataSponsors_1,
  dataSponsors_2,
  dataSponsors_3,
} from "../data/dataSlider"
import img_1_1 from "@/assets/театр/1.jpg"
import img_1_2 from "@/assets/театр/2.jpg"
export const dataContent = [
  {
    content: (
      <>
        <p>
          Організація дозвілля студентів коледжу є одним із пріоритетних
          напрямів виховної роботи зі студентською молоддю. Студентам
          створюються умови до активної самореалізації у виховному і
          громадському житті коледжу, існує широкий спектр спортивних секцій та
          наукових гуртків.
        </p>
      </>
    ),
  },
  {
    content: (
      <>
        <p>
          Активну участь в організації студентського дозвілля беруть органи
          студентського самоврядування. Вони стають ініціаторами проведення
          різноманітних культурно-масових заходів, залучають студентство до
          волонтерської та благодійної діяльності, участі в соціальних проєктах
          і екологічних акціях, спортивних заходах.
        </p>
      </>
    ),
  },
  {
    title: "Туристично-екскурсійна поїздка",
    content: (
      <>
        <Slider items={dataSponsors_1} type="row" />
      </>
    ),
  },
  {
    title: "Тернопільський академічний обласний український драматичний театр імені Т. Г. Шевченка",
    content: (
      <>
        <Images images={[img_1_1, img_1_2]} />
      </>
    ),
  },
  {
    title: "Екскурсійна поїздка в Київ",
    content: (
      <>
        <Slider items={dataSponsors_2} type="row" />
      </>
    ),
  },
  {
    title: "Святкування Дня автомобіліста та дорожника",
    content: (
      <>
        <Slider items={dataSponsors_3} type="row" />
        <video controls width="600">
          <source src="/assets/studentLeisure/day/video.mp4" type="video/mp4"/>
        </video>
      </>
    ),
  },
]
