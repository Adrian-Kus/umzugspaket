import Image from "next/image";
import style from "@/app/components/Footer.module.css";

function Footer() {
  return (
    <>
      <div className={style.frame}>
        <div className={style.logo}>
          <div className={style.logo__box}>
            <Image
              src="/logo_schenck_hansen_umzüge.png"
              alt="Logo Schenck &amp; Hansen Umzugsunternehmen"
              width="250"
              height="58"
            />
          </div>
        </div>

        <div className={style.info}>
          <div className={style.info__left}>
            <p className={style.info__header}>Adresse:</p>
            <p className={style.info__text}>
              Bargkoppelweg 56
              <br />
              22145 Hamburg
            </p>
          </div>
          <div className={style.info__right}>
            <p className={style.info__header}>Öffnungszeiten:</p>
            <p className={style.info__text}>
              Montag - Freitag
              <br />
              8:30 - 17:00 Uhr
            </p>
          </div>
        </div>

        <div className={style.bottom_line}></div>

        <div className={style.legal}>
          <p className={style.legal__copyright}>
            &#169; 2023 Schenck & Hansen KG
          </p>
          <ul className={style.legal__links}>
            <li className={style.legal__links_li}>
              <a href="https://schenck-hansen.de/impressum">Impressum</a>
            </li>
            <li className={style.legal__links_li}>
              <a href="https://schenck-hansen.de/datenschutz">Datenschutz</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
