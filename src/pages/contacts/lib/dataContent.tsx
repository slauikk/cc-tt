import {IContact} from "@/types/contacts.interface"

import Img_6 from "@/assets/people/Lisovyi.jpg"
import Img_1 from "@/assets/people/Марціяш.jpg"
import Img_2 from "@/assets/people/Радчик.jpg"
import Img_3 from "@/assets/people/Слободян.jpg"
import Img_5 from "@/assets/people/Цимбалюк.jpg"

export const dataContent = [{}]

export const dataContacts: IContact[] = [
  {
    name: "Марціяш Галина Ярославівна",
    img: Img_1,
    info: ["тел. +38 (0352) 28-18-11", "E-mail: cs@tk.te.ua"],
  },
  {
    name: "Радчик Галина Іванівна",
    img: Img_2,
  },
  {
    name: "Слободян Руслан Олесійович",
    img: Img_3,
  },
  {
    name: "Ділай Роман Володимирович",
  },
  {
    name: "Цимбалюк Людмила Володимирівна",
    img: Img_5,
  },
  {
    name: "Лісовий Володимир Миколайович",
    img: Img_6,
  },
]
