import Image from "next/image";
import style from "@/app/components/Reviews.module.css";

function Reviews() {
  return (
    <>
      <div className={style.frame}>
        <div className={style.box}>
          <div className={style.box__logo_left}>
            <a
              target="_blank"
              rel="noreferrer"
              className={style.box__link_left}
              href="https://www.my-hammer.de/auftragnehmer/schenck-hansen-kg/bewertungen"
            >
              <Image
                src="/my_hammer_logo.png"
                alt="My Hammer Logo"
                className={style.logo_left}
                width="800"
                height="128"
              ></Image>
            </a>
          </div>
          <div className={style.box__stars_left}>
            <div className={style.box__stars_img}>
              <Image
                src="/full_star.svg"
                alt="Fünf Sterne Bewertung"
                fill
              ></Image>
            </div>
            <div className={style.box__stars_img}>
              <Image
                src="/full_star.svg"
                alt="Fünf Sterne Bewertung"
                fill
              ></Image>
            </div>
            <div className={style.box__stars_img}>
              <Image
                src="/full_star.svg"
                alt="Fünf Sterne Bewertung"
                fill
              ></Image>
            </div>
            <div className={style.box__stars_img}>
              <Image
                src="/full_star.svg"
                alt="Fünf Sterne Bewertung"
                fill
              ></Image>
            </div>
            <div className={style.box__stars_img}>
              <Image
                src="/full_star.svg"
                alt="Fünf Sterne Bewertung"
                fill
              ></Image>
            </div>
          </div>
          <p className={style.box__text}>246 Bewertungen</p>
        </div>

        <div className={style.box}>
          <div className={style.box__logo_middle}>
            <a
              target="_blank"
              rel="noreferrer"
              className={style.box__link_middle}
              href="https://www.umzugsfirmen-check.de/detail/hamburg/hamburg/schenck-und-hansen-kg"
            >
              <Image
                src="/immoscout_logo.png"
                alt="Immoscout Logo"
                className={style.logo_middle}
                width="800"
                height="482"
              ></Image>
            </a>
          </div>
          <div className={style.box__stars_middle}>
            <div className={style.box__stars_img}>
              <Image
                src="/full_star.svg"
                alt="Fünf Sterne Bewertung"
                fill
              ></Image>
            </div>
            <div className={style.box__stars_img}>
              <Image
                src="/full_star.svg"
                alt="Fünf Sterne Bewertung"
                fill
              ></Image>
            </div>
            <div className={style.box__stars_img}>
              <Image
                src="/full_star.svg"
                alt="Fünf Sterne Bewertung"
                fill
              ></Image>
            </div>
            <div className={style.box__stars_img}>
              <Image
                src="/full_star.svg"
                alt="Fünf Sterne Bewertung"
                fill
              ></Image>
            </div>
            <div className={style.box__stars_img}>
              <Image
                src="/full_star.svg"
                alt="Fünf Sterne Bewertung"
                fill
              ></Image>
            </div>
          </div>
          <p className={style.box__text}>106 Bewertungen</p>
        </div>

        <div className={style.box}>
          <div className={style.box__logo_right}>
            <a
              target="_blank"
              rel="noreferrer"
              className={style.box__link_right}
              href="https://www.google.com/maps/place/Schenck+%26+Hansen+KG/@53.6216869,10.1553716,15z/data=!4m5!3m4!1s0x0:0x906901e6d781be9b!8m2!3d53.6216869!4d10.1553716"
            >
              <Image
                src="/google_logo.png"
                alt="Google Logo"
                className={style.logo_right}
                width="800"
                height="268"
              ></Image>
            </a>
          </div>
          <div className={style.box__stars_right}>
            <div className={style.box__stars_img}>
              <Image
                src="/full_star.svg"
                alt="Fünf Sterne Bewertung"
                fill
              ></Image>
            </div>
            <div className={style.box__stars_img}>
              <Image
                src="/full_star.svg"
                alt="Fünf Sterne Bewertung"
                fill
              ></Image>
            </div>
            <div className={style.box__stars_img}>
              <Image
                src="/full_star.svg"
                alt="Fünf Sterne Bewertung"
                fill
              ></Image>
            </div>
            <div className={style.box__stars_img}>
              <Image
                src="/full_star.svg"
                alt="Fünf Sterne Bewertung"
                fill
              ></Image>
            </div>
            <div className={style.box__stars_img}>
              <Image
                src="/half_star.svg"
                alt="Fünf Sterne Bewertung"
                fill
              ></Image>
            </div>
          </div>
          <p className={style.box__text}>31 Bewertungen</p>
        </div>
      </div>
    </>
  );
}

export default Reviews;
