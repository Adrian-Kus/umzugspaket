"use client"; // This is a client component
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";
import form from "@/app/contact/components/ContactForm.module.css";
import { ContactCheckbox } from "@/app/contact/components/ContactCheckbox.js";
import { useIsClient } from "@/app/contact/components/ContactUseIsClient.js";
import { CaptchaField } from "@/app/contact/components/ContactCaptchaField.js";

function ContactForm() {
  const [state, setState] = useState("IDLE");

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      captcha: false,
    },
  });

  if (!useIsClient()) return null;

  async function onSubmitForm(values) {
    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    try {
      const response = await axios(config);
      if (response.status === 200) {
        reset();
        setState("SUCCESS");
      }
    } catch (err) {
      setState("ERROR");
    }
  }

  return (
    <>
      <div className={form.container}>
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className={form.contact_form}
        >
          <input
            {...register("firstName", {
              required: "Bitte tragen Sie hier Ihren Vornamen ein.",
            })}
            className={form.field}
            type="text"
            name="firstName"
            placeholder="Vorname"
            aria-required="true"
          />
          <span className={form.error}>{errors?.firstName?.message}</span>
          <input
            {...register("lastName", {
              required: "Bitte tragen Sie hier Ihren Nachnamen ein.",
            })}
            className={form.field}
            type="text"
            name="lastName"
            placeholder="Nachname"
            aria-required="true"
          />
          <span className={form.error}>{errors?.lastName?.message}</span>
          <input
            {...register("email", {
              required: "Bitte tragen Sie hier Ihre E-Mail Adresse ein.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Die eingegebene E-Mail Adresse ist ungültig",
              },
            })}
            className={form.field}
            type="text"
            name="email"
            placeholder="E-Mail"
            aria-required="true"
          />
          <span className={form.error}>{errors?.email?.message}</span>
          <input
            {...register("phone", {
              required: "Bitte tragen Sie hier Ihre Telefonnummer ein.",
              pattern: {
                value:
                  /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i,
                message: "Die eingegebene Telefonnummer ist ungültig.",
              },
              minLength: {
                value: 4,
                message: "Die eingegebene Telefonnummer ist ungültig.",
              },
              maxLength: {
                value: 15,
                message: "Die eingegebene Telefonnummer ist ungültig.",
              },
            })}
            className={form.field}
            type="text"
            name="phone"
            placeholder="Telefon"
            aria-required="true"
          />
          <span className={form.error}>{errors?.phone?.message}</span>
          <select
            {...register("packageSelection", {
              required: "Bitte wählen Sie das gewünschte Umzugspaket aus.",
            })}
            className={form.field}
            type="select"
            name="packageSelection"
            aria-required="true"
          >
            <option value="">Umzugspaket</option>
            <option value="Umzugspaket S">Umzugspaket Small für 890€</option>
            <option value="Umzugspaket M">Umzugspaket Medium für 1.290€</option>
            <option value="Umzugspaket L">Umzugspaket Large für 1.990€</option>
          </select>
          <span className={form.error}>
            {errors?.packageSelection?.message}
          </span>

          <h2 className={form.small_header}>Angaben zum Startort des Umzugs</h2>

          <input
            {...register("startAddressStreet", {
              required: "Bitte geben Sie Ihre Straße / Nr. am Auszugsort ein.",
            })}
            className={form.field}
            type="text"
            name="startAddressStreet"
            placeholder="Auszugsort: Straße / Nummer?"
            aria-required="true"
          />
          <span className={form.error}>
            {errors?.startAddressStreet?.message}
          </span>

          <input
            {...register("startAddressPostalCode", {
              required:
                "Bitte tragen Sie hier die Postleitzahl am Auszugsort ein.",
              minLength: {
                value: 5,
                message: "Die eingegebene Postleitzahl ist ungültig.",
              },
              maxLength: {
                value: 5,
                message: "Die eingegebene Postleitzahl ist ungültig.",
              },
            })}
            className={form.field}
            type="text"
            name="startAddressPostalCode"
            placeholder="Auszugsort: Postleitzahl?"
            aria-required="true"
          />
          <span className={form.error}>
            {errors?.startAddressPostalCode?.message}
          </span>
          <input
            {...register("startAddressCity", {
              required: "Bitte tragen Sie hier die Stadt am Startort ein.",
            })}
            className={form.field}
            type="text"
            name="startAddressCity"
            placeholder="Auszugsort: Stadt?"
            aria-required="true"
          />
          <span className={form.error}>
            {errors?.startAddressCity?.message}
          </span>
          <select
            {...register("startPropertySelection", {
              required: "Bitte wählen Sie die Art des Hauses aus.",
            })}
            className={form.field}
            type="select"
            name="startPropertySelection"
            aria-required="true"
          >
            <option value="">Auszugsort: Art des Hauses?</option>
            <option value="Wohnung">Wohnung</option>
            <option value="Einfamilienhaus">Einfamilienhaus</option>
            <option value="Reihenhau">Reihenhaus</option>
            <option value="Doppelhaushälft">Doppelhaushälfte</option>
          </select>
          <span className={form.error}>
            {errors?.startPropertySelection?.message}
          </span>
          <select
            {...register("startFloorSelection", {
              required: "Bitte wählen Sie das Stockwerk aus.",
            })}
            className={form.field}
            type="select"
            name="startFloorSelection"
            aria-required="true"
          >
            <option value="">Auszugsort: Stockwerk?</option>
            <option value="Erdgeschoss">Erdgeschoss</option>
            <option value="1. Stock">1. Stock</option>
            <option value="2. Stock">2. Stocks</option>
            <option value="3. Stock">3. Stock</option>
            <option value="4. Stock">4. Stock</option>
            <option value="5. Stock">5. Stock</option>
            <option value="6. Stock">6. Stock</option>
            <option value="7. Stock">7. Stock</option>
            <option value="8. Stock">8. Stock</option>
            <option value="9. Stock">9. Stock</option>
            <option value="10. Stock">10. Stock</option>
          </select>
          <span className={form.error}>
            {errors?.startFloorSelection?.message}
          </span>
          <select
            {...register("startElevatorSelection", {
              required:
                "Bitte ergänzen Sie die fehlenden Angaben zum Fahrstuhl.",
            })}
            className={form.field}
            type="select"
            name="startElevatorSelection"
            aria-required="true"
          >
            <option value="">Auszugsort: Fahrstuhl?</option>
            <option value="Nein">Es gibt keinen Fahrstuhl</option>
            <option value="Ja / Größe: für bis zu 4 Personen">
              Ja: für bis zu 4 Personen
            </option>
            <option value="Ja / Größe: für bis zu 8 Personen">
              Ja: für bis zu 8 Personen
            </option>
            <option value="Ja / Größe: für mehr als 8 Personen">
              Ja: für mehr als 8 Personen
            </option>
          </select>
          <span className={form.error}>
            {errors?.startElevatorSelection?.message}
          </span>
          <select
            {...register("startParkingSelection", {
              required:
                "Bitte ergänzen Sie die fehlenden Angaben zum Parkplatz.",
            })}
            className={form.field}
            type="select"
            name="startParkingSelection"
            aria-required="true"
          >
            <option value="">Auszugsort: Parkplatz?</option>
            <option value="Ja">Ja</option>
            <option value="Nein">Nein</option>
          </select>
          <span className={form.error}>
            {errors?.startParkingSelection?.message}
          </span>
          <select
            {...register("startDistanceSelection", {
              required:
                "Bitte ergänzen Sie die fehlenden Angaben zum Abtrageweg.",
            })}
            className={form.field}
            type="select"
            name="startDistanceSelection"
            aria-required="true"
          >
            <option value="">Auszugsort: Abtrageweg?</option>
            <option value="10 Meter">10 Meter</option>
            <option value="20 Meter">20 Meter</option>
            <option value="30 Meter">30 Meter</option>
            <option value="40 Meter">40 Meter</option>
            <option value="50 Meter">50 Meter</option>
            <option value="60 Meter">60 Meter</option>
            <option value="70 Meter">70 Meter</option>
            <option value="80 Meter">80 Meter</option>
            <option value="90 Meter">90 Meter</option>
            <option value="100 Meter">100 Meter</option>
          </select>
          <span className={form.error}>
            {errors?.startDistanceSelection?.message}
          </span>
          <p className={form.additional_text}>
            *Der Abtrageweg ist der Laufweg zwischen dem LKW und dem Abstellort
            oder Ort des Umzugsguts
          </p>

          <h2 className={form.small_header}>Angaben zum Zielort des Umzugs</h2>

          <input
            {...register("endAddressStreet", {
              required: "Bitte geben Sie Ihre Straße und Nr. am Zielort ein.",
            })}
            className={form.field}
            type="text"
            name="endAddressStreet"
            placeholder="Einzugsort: Straße / Nummer?"
            aria-required="true"
          />
          <span className={form.error}>
            {errors?.endAddressStreet?.message}
          </span>

          <input
            {...register("endAddressPostalCode", {
              required:
                "Bitte tragen Sie hier die Postleitzahl am Einzugsort ein.",
              minLength: {
                value: 5,
                message: "Die eingegebene Postleitzahl ist ungültig.",
              },
              maxLength: {
                value: 5,
                message: "Die eingegebene Postleitzahl ist ungültig.",
              },
            })}
            className={form.field}
            type="text"
            name="endAddressPostalCode"
            placeholder="Einzugsort: Postleitzahl?"
            aria-required="true"
          />
          <span className={form.error}>
            {errors?.endAddressPostalCode?.message}
          </span>
          <input
            {...register("endAddressCity", {
              required: "Bitte tragen Sie hier die Stadt am Zielort ein.",
            })}
            className={form.field}
            type="text"
            name="endAddressCity"
            placeholder="Einzugsort: Stadt?"
            aria-required="true"
          />
          <span className={form.error}>{errors?.endAddressCity?.message}</span>
          <select
            {...register("endPropertySelection", {
              required: "Bitte wählen Sie die Art des Hauses aus.",
            })}
            className={form.field}
            type="select"
            name="endPropertySelection"
            aria-required="true"
          >
            <option value="">Einzugsort: Art des Hauses?</option>
            <option value="Wohnung">Wohnung</option>
            <option value="Einfamilienhaus">Einfamilienhaus</option>
            <option value="Reihenhau">Reihenhaus</option>
            <option value="Doppelhaushälft">Doppelhaushälfte</option>
          </select>
          <span className={form.error}>
            {errors?.endPropertySelection?.message}
          </span>
          <select
            {...register("endFloorSelection", {
              required: "Bitte wählen Sie das Stockwerk aus.",
            })}
            className={form.field}
            type="select"
            name="endFloorSelection"
            aria-required="true"
          >
            <option value="">Einzugsort: Stockwerk?</option>
            <option value="Erdgeschoss">Erdgeschoss</option>
            <option value="1. Stock">1. Stock</option>
            <option value="2. Stock">2. Stocks</option>
            <option value="3. Stock">3. Stock</option>
            <option value="4. Stock">4. Stock</option>
            <option value="5. Stock">5. Stock</option>
            <option value="6. Stock">6. Stock</option>
            <option value="7. Stock">7. Stock</option>
            <option value="8. Stock">8. Stock</option>
            <option value="9. Stock">9. Stock</option>
            <option value="10. Stock">10. Stock</option>
          </select>
          <span className={form.error}>
            {errors?.endFloorSelection?.message}
          </span>
          <select
            {...register("endElevatorSelection", {
              required:
                "Bitte ergänzen Sie die fehlenden Angaben zum Fahrstuhl.",
            })}
            className={form.field}
            type="select"
            name="endElevatorSelection"
            aria-required="true"
          >
            <option value="">Einzugsort: Fahrstuhl?</option>
            <option value="Nein">Es gibt keinen Fahrstuhl</option>
            <option value="Ja / Größe: für bis zu 4 Personen">
              Ja: für bis zu 4 Personen
            </option>
            <option value="Ja / Größe: für bis zu 8 Personen">
              Ja: für bis zu 8 Personen
            </option>
            <option value="Ja / Größe: für mehr als 8 Personen">
              Ja: für mehr als 8 Personen
            </option>
          </select>
          <span className={form.error}>
            {errors?.endElevatorSelection?.message}
          </span>
          <select
            {...register("endParkingSelection", {
              required:
                "Bitte ergänzen Sie die fehlenden Angaben zum Parkplatz.",
            })}
            className={form.field}
            type="select"
            name="endParkingSelection"
            aria-required="true"
          >
            <option value="">Einzugsort: Parkplatz?</option>
            <option value="Ja">Ja</option>
            <option value="Nein">Nein</option>
          </select>
          <span className={form.error}>
            {errors?.endParkingSelection?.message}
          </span>
          <select
            {...register("endDistanceSelection", {
              required:
                "Bitte ergänzen Sie die fehlenden Angaben zum Abtrageweg.",
            })}
            className={form.field}
            type="select"
            name="endDistanceSelection"
            aria-required="true"
          >
            <option value="">Einzugsort: Abtrageweg?</option>
            <option value="10 Meter">10 Meter</option>
            <option value="20 Meter">20 Meter</option>
            <option value="30 Meter">30 Meter</option>
            <option value="40 Meter">40 Meter</option>
            <option value="50 Meter">50 Meter</option>
            <option value="60 Meter">60 Meter</option>
            <option value="70 Meter">70 Meter</option>
            <option value="80 Meter">80 Meter</option>
            <option value="90 Meter">90 Meter</option>
            <option value="100 Meter">100 Meter</option>
          </select>
          <span className={form.error}>
            {errors?.endDistanceSelection?.message}
          </span>
          <p className={form.additional_text}>
            *Der Abtrageweg ist der Laufweg zwischen dem LKW und dem Abstellort
            oder Ort des Umzugsguts
          </p>
          <h2 className={form.small_header}>
            Angaben zu den Wunschterminen für Ihren Umzug
          </h2>
          <input
            {...register("dateOne", {
              required: "Bitte geben Sie Ihren ersten Wunschtermin an.",
              pattern: {
                value:
                  /^([1-9]|0[1-9]|[12][0-9]|3[01])[-\.]([1-9]|0[1-9]|1[012])[-\.](19|20)\d\d$/,

                message: "Das eingegebene Datum ist ungültig.",
              },
            })}
            className={form.field}
            type="text"
            name="dateOne"
            placeholder="Wunschtermin ( TT.MM.JJJJ )"
            aria-required="true"
          />
          <span className={form.error}>{errors?.dateOne?.message}</span>

          <input
            {...register("dateTwo", {
              pattern: {
                value:
                  /^([1-9]|0[1-9]|[12][0-9]|3[01])[-\.]([1-9]|0[1-9]|1[012])[-\.](19|20)\d\d$/,

                message: "Das eingegebene Datum ist ungültig.",
              },
            })}
            className={form.field}
            type="text"
            name="dateTwo"
            placeholder="1. Alternativtermin ( TT.MM.JJJJ )"
          />
          <span className={form.error}>{errors?.dateTwo?.message}</span>

          <input
            {...register("dateThree", {
              pattern: {
                value:
                  /^([1-9]|0[1-9]|[12][0-9]|3[01])[-\.]([1-9]|0[1-9]|1[012])[-\.](19|20)\d\d$/,

                message: "Das eingegebene Datum ist ungültig.",
              },
            })}
            className={form.field}
            type="text"
            name="dateThree"
            placeholder="2. Alternativtermin ( TT.MM.JJJJ )"
          />
          <span className={form.error}>{errors?.dateThree?.message}</span>

          <ContactCheckbox
            name={"privacy"}
            control={control}
            className={form.fineprint}
            required={"Bitte bestätigen Sie die Datenschutzbestimmungen."}
          >
            Ich stimme der&nbsp;
            <a
              className={form.fineprint__link}
              href="https://schenck-hansen.de/datenschutz"
            >
              Daten&shy;schutz&shy;erklä&shy;rung
            </a>
            &nbsp;und einer Kon&shy;takt&shy;auf&shy;nahme durch die Schenck &
            Hansen KG per E-Mail oder Telefon zu.
          </ContactCheckbox>

          <CaptchaRow>
            <CaptchaField control={control} name={"captcha"} />
          </CaptchaRow>
          <button className={form.btn} type="submit">
            <span className={form.btn__inner} id="formSubmit">
              Jetzt Nachricht senden
            </span>
          </button>
          <div className={form.info}>
            {state === "SUCCESS" && (
              <p>
                Wir haben Ihre Nachricht erhalten und werden uns in Kürze bei
                Ihnen melden.
              </p>
            )}
            {state === "ERROR" && (
              <p className={form.info_error}>
                Das hat leider nicht geklappt. Bitte versuchen Sie es später
                noch einmal.
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

const CaptchaRow = styled.div`
  margin-top: 3em;
`;

export default ContactForm;
