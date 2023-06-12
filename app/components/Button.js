import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import style from "@/app/components/Button.module.css";

function Button(props) {
  return (
    <>
      <Link href={`/${props.link}`} scroll={false} className={style.btn}>
        <div className={style.btn__text}>
          {props.text}
          <span className={style.btn__text_circle}>
            <IoIosArrowForward className={style.btn__text_icon} />
          </span>
        </div>
      </Link>
    </>
  );
}

export default Button;