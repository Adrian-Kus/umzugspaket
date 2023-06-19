import style from "@/app/components/CallToAction.module.css";
import Button from "@/app/components/Button.js";

function CallToAction() {
  return (
    <>
      <div className={style.frame}>
        <p className={style.header}>Buchen Sie jetzt Ihr Umzugspaket</p>
        <h2 className={style.subheader}>Sind Sie bereit für Ihren Umzug?</h2>
        <Button />
      </div>
    </>
  );
}

export default CallToAction;
