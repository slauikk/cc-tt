import {Images} from "@/components/images"
import {Img} from "@/components/img"
import {SectionImg} from "@/components/section-img"

//1
import img_1_1 from "@/assets/achivements/1/1.png"
import img_1_2 from "@/assets/achivements/1/2.png"
//2
import img_2_1 from "@/assets/achivements/2/1.jpg"
import img_2_2 from "@/assets/achivements/2/2.jpg"
import img_2_3 from "@/assets/achivements/2/3.jpg"
//3
import img_3_1 from "@/assets/achivements/3/1.png"
import img_3_2 from "@/assets/achivements/3/2.png"
import img_3_3 from "@/assets/achivements/3/3.png"
import img_3_4 from "@/assets/achivements/3/4.png"
import img_3_5 from "@/assets/achivements/3/5.png"
import img_3_6 from "@/assets/achivements/3/6.jpg"
//4
import img_4_1 from "@/assets/achivements/4/1.png"
import img_4_2 from "@/assets/achivements/4/2.png"
//5
import img_5_1 from "@/assets/achivements/5/1.png"

export const dataContent = [
  {
    content: (
      <>
        <p>
          <b>
            Студенти спеціальності Комп'ютерні науки показують високий рівень
            знань, займаючи призові місця на всеукраїнських олімпіадах з
            програмування.
          </b>
        </p>
      </>
    ),
  },
  {
    content: (
      <>
        <p>
          Команда коледжу C_TC_TNTU_ ICTeam в складі: Пелішко Максим, Бекер
          Іван, Закопець Андрій, виборола 1-ге місце I етапу Всеукраїнської
          студентської олімпіади з програмування ACM-ICPC 2019, а команда
          C_TC_TNTU_Sempai в складі: Мартинюк Володимир, Кліщ Максим, Салійчук
          Володимир,- 2-ге місце серед команд коледжів і технікумів та посіли
          5-те та 7-те місце в загальному заліку серед команд ВНЗ III-IV рівнів
          акредитації.
        </p>
        <Images images={[img_1_1, img_1_2]} />
      </>
    ),
  },
  {
    content: (
      <>
        <p>
          Команда коледжу C_TC_TNTU_ ICTeam в складі: Пелішко Максим, Бекер
          Іван, Закопець Андрій представляла ВНЗ Тернопільської області на ІІІ
          етапі Всеукраїнської студентської олімпіади з програмування ACM-ICPC
          2019, яка проводилась у м. Вінниця. Команда посіла І місце серед
          коледжів України.
        </p>
        <Images images={[img_2_1, img_2_2, img_2_3]} />
      </>
    ),
  },
  {
    content: (
      <>
        <p>
          Студенти Кліщ Максим, Попович Олександр, Стодола Назарій, тренер
          Марціяш Г.Я. показали високі знання, уміння і навички командної роботи
          з алгоритмізації та створення ефективних програм серед студентських
          команд вищих навчальних закладів та вибороли 1-е місце серед команд
          коледжів Південно-західного регіону, також посіли 2-ге місце серед
          команд ВНЗ III-IV рівнів акредитації Тернопільської області у ІІ
          відбірковому етапі олімпіади з програмування ACM-ICPC 2021.
        </p>
        <Images
          images={[img_3_1, img_3_2, img_3_3, img_3_4, img_3_5, img_3_6]}
        />
      </>
    ),
  },
  {
    content: (
      <>
        <p>
          Команда коледжу cTPC_TNTU_Uchihas (учасники: Гнідий Дмитро, Капусняк
          Михайло, Гордійчук Володимир) виборола 1-ге місце, а команда
          cTPC_TNTU_Sapfire (учасники: Голодюк Назарій, Березовський Віталій,
          Сташків Віктор) - 2-ге місце серед команд коледжів та посіли 2-те та
          3-те місце в загальному заліку серед команд ВНЗ III-IV рівнів
          акредитації, також три команди пройшли до ІІ етапу олімпіади з
          програмування АСМ-ICPC.
        </p>
        <Images images={[img_4_1, img_4_2]} />
      </>
    ),
  },
  {
    content: (
      <>
        <p>
          Викладач Слободян Руслан успішно здав сертифікаційний іспит в Oracle
          University і отримав сертифікат «Oracle Certified Professional: Java
          SE 11 Developer», який підтверджує вільне володіння мовою Java SE 11
          та набуття цінних професійних навичок, необхідних розробнику
          програмного забезпечення.
        </p>
        <Images images={[img_5_1]} />
      </>
    ),
  },
]
