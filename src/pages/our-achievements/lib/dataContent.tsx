import {Images} from "@/components/images"
import {Img} from "@/components/img"
import {SectionImg} from "@/components/section-img"

//1
import img_1_1 from "@/assets/achivements/1/1.jpg"
import img_1_2 from "@/assets/achivements/1/2.jpg"
import img_1_3 from "@/assets/achivements/1/3.jpg"

export const dataContent = [
  {
    content: (
      <>
        <p>
            Студенти спеціальності 275 «Транспортні технології (на автомобільному транспорті)»   часто беруть участь у наукових конференціях, де презентують статті, що стосуються сучасних тенденцій у транспортних технологіях, інноваціях у сфері транспорту тощо. Також є учасниками онлайн-конкурсів на платформах «На урок», «Prometeus» та інші.
        </p>
      </>
    ),
  },
  {
    content: (
      <>
        <p>
          Студенти, які проходять практику в великих транспортних фірмах, здобувають цінний досвід, що значно підвищує їх конкурентоспроможність на ринку праці.
        </p>
        <Images images={[img_1_1, img_1_2, img_1_3]} />
      </>
    ),
  },
]
