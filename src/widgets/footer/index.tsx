import clsx from "clsx"
import {FC, useMemo} from "react"

import IconEmail from "@/assets/footer/icons/email.png"
import IconInternet from "@/assets/footer/icons/internet.png"
import IconMap from "@/assets/footer/icons/map-marker.png"
import IconPhone from "@/assets/footer/icons/phone.png"

import styles from "./index.module.scss"

interface IFooter {}

export const Footer: FC<IFooter> = () => {
  const currentYear = useMemo(() => {
    return new Date().getFullYear()
  }, [])

  return (
    <div className={clsx(styles.footer)}>
      <div className={clsx(styles.footer_container)}>
        <div className={clsx(styles.footer_header)}>
          <div
            className={clsx(
              styles.footer_header_info,
              styles.footer_header_block,
            )}
          >
            <div className={clsx(styles.footer_header_info_header)}>
              <svg
                className={clsx(styles.footer_header_info_header_logo)}
                width="61"
                viewBox="0 0 61 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_89_1626)">
                  <path
                    d="M32.6271 0H0.413278C0.185031 0 0 0.172984 0 0.38637V5.80641C0 6.01982 0.185031 6.19279 0.413278 6.19279H32.6271C32.8554 6.19279 33.0404 6.01982 33.0404 5.80641V0.38637C33.0404 0.172984 32.8554 0 32.6271 0Z"
                    fill="#333333"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M34.7936 7.04471H41.4066C41.618 7.04471 41.791 7.21858 41.791 7.43109V18.5492L52.0751 7.0874H59.9921C60.1975 7.0874 60.2137 7.25621 60.0285 7.46259L47.845 21.0416V21.3135L60.6284 35.1532C60.8248 35.3657 60.8119 35.5396 60.601 35.5396H52.4509L41.791 23.9986V35.1958C41.791 35.4082 41.618 35.5821 41.4066 35.5821H34.7936C34.5822 35.5821 34.4092 35.4082 34.4092 35.1958V7.43109C34.4092 7.21858 34.5822 7.04471 34.7936 7.04471Z"
                    fill="#333333"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.4514 7.13379C25.4416 7.13379 32.7294 13.5171 32.7294 21.3911C32.7294 29.2652 25.4416 35.6484 16.4514 35.6484C7.46135 35.6484 0.173584 29.2652 0.173584 21.3911C0.173584 13.5171 7.46135 7.13379 16.4514 7.13379ZM16.4515 13.3383C21.5293 13.3383 25.6456 16.9436 25.6456 21.3911C25.6456 25.8385 21.5293 29.4438 16.4515 29.4438C11.3738 29.4438 7.25742 25.8385 7.25742 21.3911C7.25742 16.9436 11.3738 13.3383 16.4515 13.3383Z"
                    fill="#333333"
                  />
                  <path
                    d="M13.4312 8.26449V34.4855C13.4312 34.7006 13.6476 34.875 13.9144 34.875H19.6636C19.9305 34.875 20.1468 34.7006 20.1468 34.4855V8.26449C20.1468 8.04936 19.9305 7.875 19.6636 7.875H13.9144C13.6476 7.875 13.4312 8.04936 13.4312 8.26449Z"
                    fill="#333333"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_89_1626">
                    <rect width="61" height="36" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className={clsx(styles.footer_header_info_header_title)}>
                Відокремлений структурний підрозділ «Тернопільський фаховий
                коледж Тернопільського національного технічного університету
                імені Івана Пулюя»
              </div>
            </div>
            <div className={clsx(styles.footer_header_info_item)}>
              Циклова комісія транспортних технологій
            </div>
          </div>
          <div
            className={clsx(
              styles.footer_header_contacts,
              styles.footer_header_block,
            )}
          >
            <div className={clsx(styles.footer_header_contacts_item)}>
              <div className={clsx(styles.footer_header_contacts_item_inner)}>
                <img
                  src={IconMap}
                  alt=""
                  className={clsx(styles.footer_header_contacts_item_icon)}
                />
                <div className={clsx(styles.footer_header_contacts_item_title)}>
                  м. Тернопіль, вул. Л. Курбаса, 13, ауд. №306в
                </div>
              </div>
            </div>
            <div className={clsx(styles.footer_header_contacts_item)}>
              <div className={clsx(styles.footer_header_contacts_item_inner)}>
                <img
                  src={IconPhone}
                  alt=""
                  className={clsx(styles.footer_header_contacts_item_icon)}
                />
                <div className={clsx(styles.footer_header_contacts_item_title)}>
                  +38 (0352) 28-18-11
                </div>
              </div>
            </div>
            <div className={clsx(styles.footer_header_contacts_item)}>
              <div className={clsx(styles.footer_header_contacts_item_inner)}>
                <img
                  src={IconInternet}
                  alt=""
                  className={clsx(styles.footer_header_contacts_item_icon)}
                />
                <div className={clsx(styles.footer_header_contacts_item_title)}>
                  <a
                    href="http://www.tk.te.ua"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    http://www.tk.te.ua
                  </a>
                </div>
              </div>
            </div>
            <div className={clsx(styles.footer_header_contacts_item)}>
              <div className={clsx(styles.footer_header_contacts_item_inner)}>
                <img
                  src={IconEmail}
                  alt=""
                  className={clsx(styles.footer_header_contacts_item_icon)}
                />
                <div className={clsx(styles.footer_header_contacts_item_title)}>
                  transportvsptfk@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={clsx(styles.footer_banner)}>
          © {currentYear} ВСП "ТФК ТНТУ". Всі права захищено.
        </div>
      </div>
    </div>
  )
}
