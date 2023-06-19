import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import style from "@/app/components/Button.module.css";

function Button() {
  return (
    <>
      <Link href="/#packages" scroll={false} className={style.btn}>
        <div className={style.btn__text}>
          Jetzt Pakete ansehen
          <span className={style.btn__text_circle}>
            <IoIosArrowForward className={style.btn__text_icon} />
          </span>
        </div>
      </Link>
    </>
  );
}

export default Button;
