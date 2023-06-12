import style from "@/app/components/CallToAction.module.css";
import Button from "@/app/components/Button.js";

const link = "#packages";
const text = "Jetzt Pakete ansehen";

function CallToAction() {
  return (
    <>
      <div className={style.frame}>
        <p className={style.header}>Buchen Sie jetzt Ihr Umzugspaket</p>
        <h2 className={style.subheader}>Sind Sie bereit für Ihren Umzug?</h2>
        <Button link={link} text={text} />
      </div>
    </>
  );
}

export default CallToAction;
