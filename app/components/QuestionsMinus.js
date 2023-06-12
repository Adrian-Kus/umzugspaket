import Image from "next/image";
import style from "@/app/components/QuestionsSign.module.css";
import { motion } from "framer-motion";

function QuestionsMinus() {
  return (
    <>
      <motion.div layout className={style.image}>
        <Image src="/minus.svg" fill={true} alt="Zeichen schließen"></Image>
      </motion.div>
    </>
  );
}

export default QuestionsMinus;
