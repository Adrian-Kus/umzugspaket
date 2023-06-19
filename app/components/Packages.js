import style from "@/app/components/Packages.module.css";
import ButtonPackages from "@/app/components/ButtonPackages.js";
import Image from "next/image";

function Packages() {
  return (
    <>
      <div id="packages" className={style.container}>
        <div className={style.package}>
          <div className={style.top}>
            <h3 className={style.top__header}>Small</h3>
            <div className={style.top__img}>
              <Image
                src="/small_truck.svg"
                alt="Kleiner LKW 3.5 Tonnen mit zwei Möbelpackern"
                fill
              ></Image>
            </div>
            <p className={style.top__text}>
              Ideal für bis zu 45m<sup>2</sup> Wohnfläche
            </p>
          </div>
          <div className={style.main}>
            <div className={style.main__price}>
              <span className={style.main__price_symbol}>&euro;</span>890,-
            </div>
            <p className={style.main__header}>
              Das leistungsstarke Umzugspaket S enthält:
            </p>
            <ul className={style.main__list}>
              <li className={style.main__list_item}>
                <div className={style.main__list_item_img}>
                  <Image
                    src="/checkmark.svg"
                    alt="Symbol für im Umzugspaket enthalten"
                    width="29"
                    height="29"
                  ></Image>
                </div>
                <span className={style.main__list_item_text}>
                  2 erfahrene Möbelpacker
                </span>
              </li>
              <li className={style.main__list_item}>
                <div className={style.main__list_item_img}>
                  <Image
                    src="/checkmark.svg"
                    alt="Symbol für im Umzugspaket enthalten"
                    width="29"
                    height="29"
                  ></Image>
                </div>
                <span className={style.main__list_item_text}>
                  Inklusive professioneller Möbelmontage
                </span>
              </li>
              <li className={style.main__list_item}>
                <div className={style.main__list_item_img}>
                  <Image
                    src="/checkmark.svg"
                    alt="Symbol für im Umzugspaket enthalten"
                    width="29"
                    height="29"
                  ></Image>
                </div>
                <span className={style.main__list_item_text}>
                  1 ganzer Arbeitstag von 8:00 - 16:00 Uhr
                </span>
              </li>
              <li className={style.main__list_item}>
                <div className={style.main__list_item_img}>
                  <Image
                    src="/checkmark.svg"
                    alt="Symbol für im Umzugspaket enthalten"
                    width="29"
                    height="29"
                  ></Image>
                </div>
                <span className={style.main__list_item_text}>
                  inklusive An- und Abfahrt innerhalb Hamburgs
                </span>
              </li>
              <li className={style.main__list_item}>
                <div className={style.main__list_item_img}>
                  <Image
                    src="/checkmark.svg"
                    alt="Symbol für im Umzugspaket enthalten"
                    width="29"
                    height="29"
                  ></Image>
                </div>
                <span className={style.main__list_item_text}>
                  1 LKW - 3,5 Tonnen
                </span>
              </li>
            </ul>
            <ButtonPackages />
          </div>
        </div>
        <div className={style.package}>
          <div className={style.top}>
            <h3 className={style.top__header}>Medium</h3>
            <div className={style.top__img}>
              <Image
                src="/medium_truck.svg"
                alt="Mittelgroßer LKW 7.5 Tonnen mit drei Möbelpackern"
                fill
              ></Image>
            </div>
            <p className={style.top__text}>
              Perfekt für bis zu 75m<sup>2</sup> Wohnfläche
            </p>
          </div>
          <div className={style.main}>
            <div className={style.main__price}>
              <span className={style.main__price_symbol}>&euro;</span>1.290,-
            </div>
            <p className={style.main__header}>
              Das leistungsstarke Umzugspaket M enthält:
            </p>
            <ul className={style.main__list}>
              <li className={style.main__list_item}>
                <div className={style.main__list_item_img}>
                  <Image
                    src="/checkmark.svg"
                    alt="Symbol für im Umzugspaket enthalten"
                    width="29"
                    height="29"
                  ></Image>
                </div>
                <span className={style.main__list_item_text}>
                  3 erfahrene Möbelpacker
                </span>
              </li>
              <li className={style.main__list_item}>
                <div className={style.main__list_item_img}>
                  <Image
                    src="/checkmark.svg"
                    alt="Symbol für im Umzugspaket enthalten"
                    width="29"
                    height="29"
                  ></Image>
                </div>
                <span className={style.main__list_item_text}>
                  Inklusive professioneller Möbelmontage
                </span>
              </li>
              <li className={style.main__list_item}>
                <div className={style.main__list_item_img}>
                  <Image
                    src="/checkmark.svg"
                    alt="Symbol für im Umzugspaket enthalten"
                    width="29"
                    height="29"
                  ></Image>
                </div>
                <span className={style.main__list_item_text}>
                  1 ganzer Arbeitstag von 8:00 - 16:00 Uhr
                </span>
              </li>
              <li className={style.main__list_item}>
                <div className={style.main__list_item_img}>
                  <Image
                    src="/checkmark.svg"
                    alt="Symbol für im Umzugspaket enthalten"
                    width="29"
                    height="29"
                  ></Image>
                </div>
                <span className={style.main__list_item_text}>
                  inklusive An- und Abfahrt innerhalb Hamburgs
                </span>
              </li>
              <li className={style.main__list_item}>
                <div className={style.main__list_item_img}>
                  <Image
                    src="/checkmark.svg"
                    alt="Symbol für im Umzugspaket enthalten"
                    width="29"
                    height="29"
                  ></Image>
                </div>
                <span className={style.main__list_item_text}>
                  1 LKW - 7,5 Tonnen
                </span>
              </li>
            </ul>
            <ButtonPackages />
          </div>
        </div>
        <div className={style.package}>
          <div className={style.top}>
            <h3 className={style.top__header}>Large</h3>
            <div className={style.top__img}>
              <Image
                src="/large_truck.svg"
                alt="Großer LKW 16 Tonnen mit fünf Möbelpackern"
                fill
              ></Image>
            </div>
            <p className={style.top__text}>
              Optimal für bis zu 110m<sup>2</sup> Wohnfläche
            </p>
          </div>
          <div className={style.main}>
            <div className={style.main__price}>
              <span className={style.main__price_symbol}>&euro;</span>
              1.990,-
            </div>
            <p className={style.main__header}>
              Das leistungsstarke Umzugspaket L enthält:
            </p>
            <ul className={style.main__list}>
              <li className={style.main__list_item}>
                <div className={style.main__list_item_img}>
                  <Image
                    src="/checkmark.svg"
                    alt="Symbol für im Umzugspaket enthalten"
                    width="29"
                    height="29"
                  ></Image>
                </div>
                <span className={style.main__list_item_text}>
                  5 erfahrene Möbelpacker
                </span>
              </li>
              <li className={style.main__list_item}>
                <div className={style.main__list_item_img}>
                  <Image
                    src="/checkmark.svg"
                    alt="Symbol für im Umzugspaket enthalten"
                    width="29"
                    height="29"
                  ></Image>
                </div>
                <span className={style.main__list_item_text}>
                  Inklusive professioneller Möbelmontage
                </span>
              </li>
              <li className={style.main__list_item}>
                <div className={style.main__list_item_img}>
                  <Image
                    src="/checkmark.svg"
                    alt="Symbol für im Umzugspaket enthalten"
                    width="29"
                    height="29"
                  ></Image>
                </div>
                <span className={style.main__list_item_text}>
                  1 ganzer Arbeitstag von 8:00 - 16:00 Uhr
                </span>
              </li>
              <li className={style.main__list_item}>
                <div className={style.main__list_item_img}>
                  <Image
                    src="/checkmark.svg"
                    alt="Symbol für im Umzugspaket enthalten"
                    width="29"
                    height="29"
                  ></Image>
                </div>
                <span className={style.main__list_item_text}>
                  inklusive An- und Abfahrt innerhalb Hamburgs
                </span>
              </li>
              <li className={style.main__list_item}>
                <div className={style.main__list_item_img}>
                  <Image
                    src="/checkmark.svg"
                    alt="Symbol für im Umzugspaket enthalten"
                    width="29"
                    height="29"
                  ></Image>
                </div>
                <span className={style.main__list_item_text}>
                  1 LKW - 16 Tonnen
                </span>
              </li>
            </ul>
            <ButtonPackages />
          </div>
        </div>
      </div>
    </>
  );
}

export default Packages;
