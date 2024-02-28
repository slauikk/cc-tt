import {IContact} from "@/types/contacts.interface"

import fake from "@/assets/fake_teacher.jpg"
import Img_6 from "@/assets/people/Lisovyi.jpg"
import Img_7 from "@/assets/people/dilay.jpg"
import Img_8 from "@/assets/people/lapandra.png"
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
    info: ["E-mail: halynarad@ukr.net"],
  },
  {
    name: "Слободян Руслан Олесійович",
    img: Img_3,
    info: ["E-mail: ruslan@tk.te.ua"],
  },
  {
    name: "Ділай Роман Володимирович",
    img: Img_7,
    info: ["E-mail: ca@tk.te.ua"],
  },
  {
    name: "Цимбалюк Людмила Володимирівна",
    img: Img_5,
    info: ["E-mail: lusadz@gmail.com"],
  },
  {
    name: "Лісовий Володимир Миколайович",
    img: Img_6,
    info: ["E-mail: lv21@i.ua"],
  },
  {
    name: "Ляпандра Андрій Степанович",
    img: Img_8,
    info: ["E-mail: lyapandra.andriy.s@gmail.com"],
  },
  {
    name: "Сербін Володимир",
    img: fake,
    info: ["E-mail: celludenberg@gmail.com"],
  },
]
