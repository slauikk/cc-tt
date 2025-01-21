import clsx from "clsx"
import {FC} from "react"

import {PageLayout} from "../../layouts"

import styles from "./index.module.scss"

interface IHome {}

export const Home: FC<IHome> = () => {
  return (
    <PageLayout>
      <div id="home" className={clsx(styles.page)}>
        <div className={clsx(styles.page_content)}>
          <div className={clsx(styles.page_content_inner)}>
            <div className={clsx(styles.home_hero)}>
              <div className={clsx(styles.home_hero_info)}>
                <div className={clsx(styles.home_hero_info_title)}>
                  Циклова комісія транспортних технологій
                </div>
                <div className={clsx(styles.home_hero_info_des)}>
                  <p>
                    На сьогоднішній час без автомобільного транспорту
                    неможлива діяльність жодної галузі господарства країни.
                    Безліч підприємств та організацій тісно пов'язані з автомобільними
                    перевезеннями у промисловості, будівництві, сільському господарстві,
                    торгівлі.  Функціонують великі транспортні та логістичні термінали для
                    вантажів і пасажирів, транспортні системи міст.  В автотранспортних та
                    транспортно-експедиторських службах або відділах із забезпечення автомобільних
                    перевезень вантажів та пасажирів потрібні фахівці з організації перевезень та
                    управління на транспорті.  Формування ринкового господарства ставить нові вимоги
                    щодо змісту та організації підготовки фахівців на автотранспорті.

                  </p>
                </div>
              </div>
              <img
                className={clsx(styles.home_hero_img)}
                src="./assets/img/materialBase/310/12.png"
                alt=""
              />
            </div>
            <div className={clsx(styles.home_section)}>
              <div className={clsx(styles.home_section_title)}>
                <div className={clsx(styles.home_section_title_inner)}>
                  Спеціальність 275 «Транспортні технології (на автомобільному транспорті)» забезпечує надання якісної сучасної освіти здобувачам через вільне та творче навчання, шляхом формування індивідуальної освітньої траєкторії здобувача, підготовки до професійної діяльності із вирішення спеціалізованих задач та практичних проблем у галузі транспортних технологій (на автомобільному транспорті).
                </div>
              </div>
              <div className={clsx(styles.home_prospects)}>
                <div className={clsx(styles.home_prospects_item)}>
                  <div className={clsx(styles.home_prospects_item_title)}>
                    Кар'єрні можливості:
                  </div>
                  <div className={clsx(styles.home_prospects_item_prospects)}>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      Фаховий молодший бакалавр в сфері транспортних технологій (на автомобільному транспорті) здатний виконувати професійну роботу (коди та назви класифікаційного угрупування професійних назв робіт згідно з Національним класифікатором України ДК 003:2010 (із змінами)):
                      <ul>
                        <li>Диспетчер автомобільного транспорту </li>
                        <li>Диспетчер міжнародних  перевезень </li>
                        <li>Диспетчер служби перевезень</li>
                        <li>Ревізор автомобільного транспорту </li>
                        <li>Ревізор з безпеки руху </li>
                        <li>Організатор з обслуговування перевезень (на автотранспорті)</li>
                        <li>Агент з митного оформлення вантажів та товарів </li>
                        <li>Агент з передачі вантажу на прикордонній станції (пункті)</li>
                        <li>Агент із замовлень населення на перевезення </li>
                        <li>Експедитор транспортний </li>
                        <li>Черговий по транспортно-експедиційному підприємству</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={clsx(styles.home_prospects_item)}>
                  <div className={clsx(styles.home_prospects_item_title)}>
                    Пріорітети спеціальності <br/>Транспортні технології <br/>(на автомобільному транспорті):
                  </div>
                  <div className={clsx(styles.home_prospects_item_prospects)}>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      Сфера транспортних технологій розвивається та вдосконалюється, що створює безліч нових можливостей вирішення виробничих проблем.
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item
                      )}
                    >
                      Гнучкість кар'єри: Транспортні технології використовуються у багатьох галузях, що дозволяє вам
                      знайти роботу в сфері, яка вас цікавить:
                      <li>організація доставки вантажів і пасажирів;</li>
                      <li>транспортно-експедиторська діяльність;</li>
                      <li>розробка логістичних систем;</li>
                      <li>аналіз вантажопотоків;</li>
                      <li>організація маршрутів перевезень пасажирів;</li>
                      <li>управління структурами автотранспортного комплексу;</li>
                      <li>організація митного контролю та міжнародних перевезень;</li>
                      <li>організація роботи транспорту в регіонах і транспортних вузлах;</li>
                      <li>підрозділи поліції;</li>
                      <li>організація управлінської та маркетингової діяльності на підприємстві.</li>
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      Висока зарплата: Професії в галузі транспортних технологій  пов'язані з високими зарплатами та багатьма можливостями для кар'єрного зростання.
                    </div>
                  </div>
                </div>
                <div className={clsx(styles.home_prospects_item)}>
                  <div className={clsx(styles.home_prospects_item_title)}>
                    Навчання та навички:
                  </div>
                  <div className={clsx(styles.home_prospects_item_prospects)}>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      Освітньо-професійна програма дає можливість отримати спеціалізовані знання та практичні навики щодо роботи транспортних процесів і систем, оптимальних рішень, що розкривають закономірності управління транспортними перевезеннями.

                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      Комунікаційні навички: Вміння ефективно спілкуватися та працювати в команді важливо для успіху в сфері транспортних технологій, оскільки часто виникає потреба в співпраці з іншими фахівцями та клієнтами.
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      Постійне навчання: Галузь транспортних технологій постійно змінюється, тому важливо бути готовим до навчання нових технологій та оновлення своїх навичок.


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
