import { Controller } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "@/app/contact/components/ContactForm.module.css";

export function CaptchaField({ control, name }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        return (
          <div>
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              size="invisible"
              onChange={(result) => {
                if (process.env.NODE_ENV === "development")
                  console.debug("RECAPTCHA", result);
                field.onChange(!!result);
              }}
            />
            {error && <p className={styles.error}>{error?.message}</p>}
          </div>
        );
      }}
    />
  );
}
