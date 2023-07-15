"use client"; // This is a client component
import style from "@/app/components/Questions.module.css";
import QuestionsToggle from "@/app/components/QuestionsToggle.js";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function Questions() {
  return (
    <>
      <div className={style.container}>
        <LayoutGroup>
          <motion.h2 className={style.header} layout>
            Umzugspakete - FAQ
          </motion.h2>
          <motion.p className={style.subheader} layout>
            Alle Fragen rund um unsere Umzugspakte
          </motion.p>
          <div className={style.frame}>
            <AnimatePresence>
              <QuestionsToggle
                number="01."
                title="Welches Umzugspaket ist das richtige für mich?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={style.answer}
                >
                  <p className={style.answer__first}>
                    Die Wahl des richtig Umzugspakets hängt vor allem von der
                    Transportmenge ab. Die Transportmenge hängt größtenteils von
                    der Wohnfläche ab. Daher haben wir die
                    Umzugspaketempfehlungen anhand der Wohnfläche erstellt.
                  </p>
                  <p className={style.answer__first}>
                    Ihr Umzugsberater berät Sie vorab auf Augenhöhe und
                    empfiehlt anhand Ihrer persönlichen Umzugsbegebenheiten ein
                    Umzugspaket. Sie können Ihr Umzugspaket um weitere
                    Möbelpacker erweitern, wenn viele Geschosse bezwungen oder
                    lange Abtragewege gemeistert werden müssen.
                  </p>
                  <p className={style.answer__first}>
                    Durch diese Flexibilität können die meisten Umzüge innerhalb
                    Hamburgs auch an einem Arbeitstag mit dem passenden
                    Umzugspaket gemeistert werden.
                  </p>
                </motion.div>
              </QuestionsToggle>
            </AnimatePresence>
            <AnimatePresence>
              <QuestionsToggle
                number="02."
                title="Wie lange muss mein Umzug im Voraus gebucht werden?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={style.answer}
                >
                  <p className={style.answer__first}>
                    Solange wir Kapazitäten verfügbar haben, können Sie bei uns
                    Ihr Umzugspaket buchen.
                  </p>
                  <p className={style.answer__first}>
                    Es gibt keine feste Vorlaufzeit, wenn Sie ausreichend
                    Parkfläche zur Verfügung stellen können. Somit können Umzüge
                    auch mit 1 Tag Vorlaufzeit durchgeführt werden. Werden
                    Halteverbotszonen benötigt, beträgt die Vorlaufzeit
                    mindestens 14 Werktage.
                  </p>
                </motion.div>
              </QuestionsToggle>
            </AnimatePresence>
            <AnimatePresence>
              <QuestionsToggle
                number="03."
                title="Wie berechnet Schenck &amp; Hansen die Arbeitszeit?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={style.answer}
                >
                  <p className={style.answer__first}>
                    Ein Arbeitstag umfasst bis zu 8 Stunden Arbeitszeit. Die
                    Arbeitszeit wird ab Arbeitsbeginn in der Firma bis zum
                    Arbeitsende in der Firma berechnet. Firmensitz ist der
                    Bargkoppelweg 56, 22145 Hamburg.
                  </p>
                </motion.div>
              </QuestionsToggle>
            </AnimatePresence>
            <AnimatePresence>
              <QuestionsToggle number="04." title="Wann beginnt mein Umzug?">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={style.answer}
                >
                  <p className={style.answer__first}>
                    Der geplante Arbeitsbeginn beim Kunden ist um 8:00 Uhr. Je
                    nach Verkehrsverhältnissen kann der Umzug auch etwas früher
                    oder später beginnen.
                  </p>
                </motion.div>
              </QuestionsToggle>
            </AnimatePresence>
            <AnimatePresence>
              <QuestionsToggle
                number="05."
                title="Entstehen Zusatzkosten für den LKW?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={style.answer}
                >
                  <p className={style.answer__first}>
                    Bei Umzügen innerhalb Hamburgs sind die Kosten für den LKW
                    inklusive, wenn es nur eine Fahrt zwischen Beladestelle und
                    Entladestelle gibt.
                  </p>
                </motion.div>
              </QuestionsToggle>
            </AnimatePresence>
            <AnimatePresence>
              <QuestionsToggle
                number="06."
                title="Was passiert, wenn mein Umzug länger als 8 Stunden dauert?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={style.answer}
                >
                  <p className={style.answer__first}>
                    Natürlich lassen wir Sie nicht im Regen stehen, sollte der
                    Umzug länger als 8 Stunden dauern. Wir suchen in diesen
                    Fällen immer nach einer schnellen und zufriedenstellenden
                    Lösung für alle Parteien.
                  </p>
                  <p className={style.answer__first}>
                    Arbeiten die Mitarbeiter länger als die im Umzugspaket
                    enthaltenen 8 Stunden bei Ihnen vor Ort, wird der
                    zusätzliche Zeitaufwand separat in Rechnung gestellt. Je
                    weitere Stunde, je Mitarbeiter stellen wir 42,50 Euro brutto
                    in Rechnung.
                  </p>
                </motion.div>
              </QuestionsToggle>
            </AnimatePresence>
            <AnimatePresence>
              <QuestionsToggle
                number="07."
                title="Muss ich mich selbst um ausreichend Parkfläche für den LKW kümmern?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={style.answer}
                >
                  <p className={style.answer__first}>
                    Gerne übernehmen wir für Sie die Organisation einer
                    Parkfläche in Form einer Halteverbotszone. Sie müssen uns
                    rechtzeitig vorab beauftragen, sodass wir uns um die
                    Genehmigung und das Aufstellen und Abbauen der
                    Halteverbotszonenschilder kümmern können. Die Vorlaufzeit
                    für die Genehmigung beträgt in Hamburg aktuell 14 Werktage.
                  </p>
                  <p className={style.answer__first}>
                    Die Kosten dafür betragen in Hamburg 130,00 Euro je einfache
                    Halteverbotszone inklusive Genehmigungsgebühren.
                  </p>
                  <p className={style.answer__first}>
                    Wenn Sie sich selbstständig um Parkflächen kümmern wollen:
                    Unsere LKW benötigen 15m Länge, 4m Höhe und 3m Breite zum
                    sicheren Parken und Rangieren.
                  </p>
                </motion.div>
              </QuestionsToggle>
            </AnimatePresence>
            <AnimatePresence>
              <QuestionsToggle
                number="08."
                title="Können Umzugspakete außerhalb Hamburgs gebucht werden?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={style.answer}
                >
                  <p className={style.answer__first}>
                    Wir bieten unsere Umzugspakete auch außerhalb Hamburgs an.
                  </p>
                  <p className={style.answer__first}>
                    Befindet sich die Beladestelle oder Entladestelle außerhalb
                    Hamburgs, sind bis zu 50 Kilometer in jedem Umzugspaket
                    inkludiert. Je weiteren Kilometer berechnen wir 1,50 Euro.
                  </p>
                </motion.div>
              </QuestionsToggle>
            </AnimatePresence>
            <AnimatePresence>
              <QuestionsToggle
                number="09."
                title="Können meine Umzugskartons auch von Schenck &amp; Hansen ein- und
                ausgepackt werden?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={style.answer}
                >
                  <p className={style.answer__first}>
                    Wir bieten Ihnen unseren Packservice auch im Rahmen der
                    Umzugspakete an. Wenn wir für Sie einpacken, dann verwenden
                    wir ausschließlich unsere Umzugskartons sowie unser
                    Verpackungsmaterial. Umzugskartons und Verpackungsmaterial
                    können gegen Aufpreis zusätzlich zu Ihrem Umzugspaket
                    gebucht werden.
                  </p>
                </motion.div>
              </QuestionsToggle>
            </AnimatePresence>
            <AnimatePresence>
              <QuestionsToggle
                number="10."
                title="Werden meine Möbel von Schenck &amp; Hansen fachgerecht verpackt?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={style.answer}
                >
                  <p className={style.answer__first}>
                    Schenck &amp; Hansen kümmert sich auch um das
                    Schutzverpacken Ihres empfindlichen Mobiliars. In jedem
                    Umzugspaket ist eine Rolle Stretchfolie mit 300 Metern Länge
                    ohne Mehrkosten inklusive. Damit umwickeln wir Ihr
                    empfindliches Mobiliar, sodass der sichere Transport
                    ermöglicht werden kann.
                  </p>
                </motion.div>
              </QuestionsToggle>
            </AnimatePresence>
            <AnimatePresence>
              <QuestionsToggle
                number="11."
                title="Wer verpackt große Bilder und große Spiegel?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={style.answer}
                >
                  <p className={style.answer__first}>
                    Große Bilder und Spiegel (bis 1,50m längste Seite), die
                    nicht in einen Umzugskarton passen, müssen vor dem Transport
                    verpackt werden. Entweder können Sie diese eigenständig
                    verpacken oder unsere Mitarbeiter übernehmen das Verpacken
                    am Umzugstag. Verpackungsarbeiten führen wir nur mit eigenem
                    Verpackungsmaterial durch. Übernehmen unsere Mitarbeiter das
                    Verpacken, berechnen wir 5 Euro je großen Bild bzw. je
                    großen Spiegel für das Verpackungsmaterial.
                  </p>
                </motion.div>
              </QuestionsToggle>
            </AnimatePresence>
            <AnimatePresence>
              <QuestionsToggle
                number="12."
                title="Können meine Bilder, Spiegel oder Gardinenstangen von Schenck &amp;
                Hansen professionell montiert werden?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={style.answer}
                >
                  <p className={style.answer__first}>
                    Auch das Anbohren von Bildern, Spiegeln oder Gardinenstangen
                    ist möglich. Unsere Mitarbeiter nutzen das von Ihnen
                    bereitgestellte Kleinmaterial (Dübel und Schrauben) zum
                    Befestigen. Sollte das Kleinmaterial Ihrerseits nicht
                    vorhanden sein, können wir unser Kleinmaterial verwenden.
                    Dafür berechnen wir eine Pauschale in Höhe von 25 Euro.
                  </p>
                </motion.div>
              </QuestionsToggle>
            </AnimatePresence>
            <AnimatePresence>
              <QuestionsToggle
                number="13."
                title="Ist mein Umzug mit Schenck &amp; Hansen versichert?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={style.answer}
                >
                  <p className={style.answer__first}>
                    Ihr Umzug ist bei Schenck &amp; Hansen immer versichert. Ihr
                    Umzugsgut ist ohne Mehrkosten mit 620 Euro je Kubikmeter
                    Ladevolumen zum Zeitwert versichert. Zusätzlich sind
                    Gebäude, Böden und ähnliches durch die betriebliche
                    Haftpflichtversicherung von Schenck &amp; Hansen geschützt.
                  </p>
                  <p className={style.answer__first}>
                    Zusätzlich können höhere Summen zum Zeitwert oder Neuwert
                    kostenpflichtig in der von Ihnen gewünschten Summe
                    versichert werden. Sprechen Sie uns einfach darauf an und
                    wir beraten Sie.
                  </p>
                </motion.div>
              </QuestionsToggle>
            </AnimatePresence>
          </div>
        </LayoutGroup>
      </div>
    </>
  );
}

export default Questions;
