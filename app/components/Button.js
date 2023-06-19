import { IoIosArrowForward } from "react-icons/io";
import style from "@/app/components/Button.module.css";

function Button() {
  return (
    <>
      <a href="/#packages" scroll={false} className={style.btn}>
        <div className={style.btn__text}>
          Jetzt Paket buchen
          <span className={style.btn__text_circle}>
            <IoIosArrowForward className={style.btn__text_icon} />
          </span>
        </div>
      </a>
    </>
  );
}

export default Button;
