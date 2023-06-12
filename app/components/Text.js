import style from "@/app/components/Text.module.css";
import Image from "next/image";

function Text() {
  return (
    <>
      <div className={style.main_grid}>
        <div className={style.image_left_01}>
          <div className={style.image_left__img}>
            <Image
              src="/text_img_01.jpg"
              alt="2 Möbelpacker laden mehrere Kartons in einen Umzugslaster"
              fill
              sizes="40vw"
            ></Image>
          </div>
          <div className={style.image_left__img_large}>
            <Image
              src="/text_img_01_landscape.jpg"
              alt="2 Möbelpacker laden mehrere Kartons in einen Umzugslaster - Querformat"
              fill
              sizes="85vw"
            ></Image>
          </div>
          <div className={style.image_left__bg}></div>
        </div>

        <div className={style.text_right_01}>
          <h3 className={style.subheader}>
            Ihr Umzugs­unter­nehmen in Hamburg für mehr als Standard
          </h3>
          <p className={style.text}>
            Wir sind Ihr Full-Service-Umzugs­unter­nehmen aus der Hanse­stadt
            Hamburg. Für uns stehen Quali­tät, Termin­treue und
            Zu­ver­lässig­keit seit mehr als 120 Jahren an obers­ter Stelle.
            Unsere Kom­petenz und Er­fah­rung sind unser Kapital, unser Team
            unser Stolz. So machen wir für Sie jeden Tag großes möglich … und
            genau das zeichnet uns aus.
          </p>
        </div>

        <div className={style.image_right_02}>
          <div className={style.image_right__img}>
            <Image
              src="/text_img_02.jpg"
              alt="2 Möbelpacker laden 2 Kartons in einen Umzugslaster"
              fill
              sizes="40vw"
            ></Image>
          </div>
          <div className={style.image_right__img_large}>
            <Image
              src="/text_img_02_landscape.jpg"
              alt="2 Möbelpacker laden 2 Kartons in einen Umzugslaster - Querformat"
              fill
              sizes="85vw"
            ></Image>
          </div>
          <div className={style.image_right__bg}></div>
        </div>

        <div className={style.text_left_02}>
          <h3 className={style.subheader}>
            Schenck & Hansen - Alle Leistungen aus einer Hand
          </h3>
          <p className={style.text}>
            Ergänzen Sie Ihren Umzug mit unseren praktischen Zusatz­leis­tungen,
            wie bei­spiels­weise die Or­ga­ni­sa­tion von Halte­ver­bots­zonen
            oder Umzugskartons und Verpackungsmaterial. Als Umzugs­unternehmen
            in Hamburg be­herr­schen wir die ge­samte Band­breite an
            Leis­tungen. Sie ent­scheiden, was wir für Ihren Umzug über­nehmen
            dürfen.
          </p>
        </div>

        <div className={style.image_left_03}>
          <div className={style.image_left__img}>
            <Image
              src="/text_img_03.jpg"
              alt="Möbelpacker laden Kartons aus einen Umzugslaster"
              fill
              sizes="40vw"
            ></Image>
          </div>
          <div className={style.image_left__img_large}>
            <Image
              src="/text_img_03_landscape.jpg"
              alt="Möbelpacker laden Kartons aus einen Umzugslaster - Querformat"
              fill
              sizes="85vw"
            ></Image>
          </div>
          <div className={style.image_left__bg}></div>
        </div>

        <div className={style.text_right_03}>
          <h3 className={style.subheader}>Auf der sicheren Seite</h3>
          <p className={style.text}>
            Als Ihr Umzugsunternehmen in Hamburg sind wir achtsam und
            sorg­fältig. Sehr acht­sam und sorg­fältig. Wer mit uns geht, der
            geht den sicheren Weg. Wir sichern, schüt­zen und über­prüfen. Und
            gehen lieber einen Schritt zu weit. Aus jahr­zehn­te­langer
            Er­fah­rung wissen wir genau, auf was wir achten müssen, damit Ihr
            Hab und Gut am Um­zugs­tag sicher ankommt.
          </p>
        </div>
      </div>
    </>
  );
}

export default Text;
