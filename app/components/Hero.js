import style from "@/app/components/Hero.module.css";
import Button from "@/app/components/Button.js";
import Image from "next/image";

const link = "#packages";
const text = "Jetzt Pakete ansehen";

function Hero() {
  return (
    <>
      <div className={style.container}>
        <div className={style.img}>
          <Image
            src="/hero_img_large.jpg"
            alt="Umzugshelfer von Schenck und Hansen tragen eine Matratze"
            fill={true}
            style={{ objectFit: "cover", objectPosition: "right" }}
            priority
          ></Image>
        </div>
        <div className={style.media_container}>
          <div className={style.img_large}>
            <Image
              src="/hero_img_large_landscape.jpg"
              alt="Umzugshelfer von Schenck und Hansen tragen eine Matratze - Querformat"
              fill
              sizes="80vw"
            ></Image>
          </div>
        </div>
        <div className={style.container__right}>
          <h1 className={style.header}>
            Die Umzugspakete, die keine Wünsche offen lassen.
          </h1>
          <p className={style.text}>
            Entdecken Sie unsere preis&shy;werten & starken Umzugs&shy;lösungen
            für jede Haus&shy;halts&shy;größe.
          </p>
          <Button link={link} text={text} />
        </div>
      </div>
    </>
  );
}

export default Hero;
