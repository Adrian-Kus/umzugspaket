import Image from "next/image";
import style from "@/app/components/QuestionsSign.module.css";
import { motion } from "framer-motion";

function QuestionsPlus() {
  return (
    <>
      <motion.div layout className={style.image}>
        <Image src="/plus.svg" fill={true} alt="Zeichen öffnen"></Image>
      </motion.div>
    </>
  );
}

export default QuestionsPlus;
