import style from "@/app/components/Introduction.module.css";

function Introduction() {
  return (
    <>
      <div className={style.frame}>
        <h2 className={style.frame__header}>
          Willkommen bei Schenck & Hansen – Ihrem Partner für leistungsstarke
          Qualitätsumzüge!
        </h2>
        <p className={style.frame__text}>
          Wir wissen, dass ein Umzug eine aufregende, aber auch sehr
          anstrengende Zeit sein kann. Genau deshalb haben wir für Sie drei
          maßgeschneiderte Umzugspakete zusammengestellt, um Ihren Umzug so
          bequem und effizient wie möglich zu gestalten. Egal, ob kleines
          Studentenapartment, 3-Zimmer Wohnung oder Doppelhaushälfte, wir haben
          die perfekte Umzugslösung für Sie. Unsere erfahrenen Umzugshelfer und
          modernen Umzugswagen stehen für Sie bereit, um Ihre wertvollen
          Besitztümer sicher in ihr neues Zuhause zu bringen. Wählen Sie einfach
          das Paket, das am besten zu Ihren Bedürfnissen passt. Wir kümmern uns
          darum, dass Ihr Umzug sorgenfrei wird.
        </p>
      </div>
    </>
  );
}

export default Introduction;
