"use client"; // This is a client component
import React, { useState } from "react";
import { LayoutGroup } from "framer-motion";
import { motion } from "framer-motion";
import style from "@/app/components/QuestionsToggle.module.css";
import QuestionsMinus from "@/app/components/QuestionsMinus.js";
import QuestionsPlus from "@/app/components/QuestionsPlus.js";

const QuestionsToggle = ({ children, number, title }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <LayoutGroup>
        <motion.div
          className={style.container}
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <motion.p className={style.number} layout>
            {number}
          </motion.p>
          <motion.div layout className={style.title}>
            <motion.h3 layout>{title}</motion.h3>
          </motion.div>
          <motion.div layout className={style.symbol}>
            {toggle ? <QuestionsMinus /> : <QuestionsPlus />}
          </motion.div>
          <motion.div layout className={style.movable}>
            {toggle ? children : ""}
            <motion.div layout className={style.line}></motion.div>
          </motion.div>
        </motion.div>
      </LayoutGroup>
    </>
  );
};

export default QuestionsToggle;
