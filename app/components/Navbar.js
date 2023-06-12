import Link from "next/link";
import Image from "next/image";
import style from "@/app/components/Navbar.module.css";

function Navbar() {
  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        <Link href="/" passHref tabIndex="0">
          <Image
            src="/schenck_hansen_umzugsunternehmen_logo.png"
            alt="Schenck & Hansen Umzugsunternehmen Logo"
            width="200"
            height="48"
          ></Image>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
