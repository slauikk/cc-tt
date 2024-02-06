import {Images} from "@/components/images"
import {Img} from "@/components/img"
import {SectionImg} from "@/components/section-img"

//211
import img_101_1 from "@/assets/material-base/101/1.jpg"
import img_101_2 from "@/assets/material-base/101/2.jpg"
import img_101_3 from "@/assets/material-base/101/3.jpg"
import img_101_4 from "@/assets/material-base/101/4.jpg"

export const dataContent = [
  {
    title:
      "Матеріально-технічна база циклової комісії комп’ютерних наук складається з наступних аудиторій:",
    content: (
      <>
        <ul>
          <li>
            №101. Лабораторія об’єктно-орієнтованого програмування. Тестування
            програмних систем і комплексів. Технологій створення програмних
            продуктів.
            <Images images={[img_101_1, img_101_2, img_101_3, img_101_4]} />
          </li>
          <li>
            №102. Лабораторія програмування інформаційних систем. Архітектури
            обчислювальних систем.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Аудиторія №101",
    content: (
      <>
        <p>Апаратне забезпечення аудиторії №101:</p>
        <ul>
          <li>
            14 студентських ПК + 1 викладацький ПК(AMD Ryzen 3 3200G, 16 Gb
            RAM);
          </li>
          <li>2 телевізора Hoffson 43” A43FHD200T2;</li>
          <li>мультимедійна сенсорна дошка INTBOARD GT65;</li>
          <li>вебкамера A4tech;</li>
          <li>WIFI-роутер;</li>
          <li>інтелектуальний комутатор Cisco;</li>
          <li>2 цифрові камери відеоспостереження.</li>
        </ul>
        <p>Програмне забезпечення аудиторії №101:</p>
        <ul>
          <li>Windows 10 Pro;</li>
          <li>IntelliJ IDEA Ultimate;</li>
          <li>Qt Creator Community;</li>
          <li>Visual Studio Community;</li>
          <li>WebStorm;</li>
          <li>Git / Github;</li>
          <li>Postman / Insomnia;</li>
          <li>PostgreSQL / MySQL / MariaDB, MongoDB, SQLiteStudio;</li>
          <li>Jira / MantisBT / Trello;</li>
          <li>Zoom / Google Meet / Discord;</li>
          <li>LibreOffice / Foxit Reader;</li>
          <li>Total Commander.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Аудиторія №101",
    content: (
      <>
        <p>Апаратне забезпечення аудиторії №102:</p>
        <ul>
          <li>14 студентських ПК + 1 викладацький;</li>
          <li>телевізор Vinga 32”.</li>
        </ul>
        <p>Програмне забезпечення аудиторії №102:</p>
        <ul>
          <li>ОС Windows 7/10;</li>
          <li>Visual Studio Community;</li>
          <li>Dev-Cpp;</li>
          <li>WebStorm;</li>
          <li>Git / Github;</li>
          <li>MySQL, MongoDB;</li>
          <li>Zoom / Google Meet;</li>
          <li>LibreOffice / Foxit Reader;</li>
          <li>Total Commander.</li>
        </ul>
      </>
    ),
  },
]
