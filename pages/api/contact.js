import nodemailer from "nodemailer";

const contactApi = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    packageSelection,
    startAddressStreet,
    startAddressNumber,
    startAddressPostalCode,
    startAddressCity,
    startPropertySelection,
    startFloorSelection,
    startElevatorSelection,
    startParkingSelection,
    startDistanceSelection,
    endAddressStreet,
    endAddressNumber,
    endAddressPostalCode,
    endAddressCity,
    endPropertySelection,
    endFloorSelection,
    endElevatorSelection,
    endParkingSelection,
    endDistanceSelection,
    dateOne,
    dateTwo,
    dateThree,
    privacy,
  } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: "umzug.hamburg.schenck.hansen@gmail.com",
      subject: `Neue Nachricht von ${lastName} (Kontaktformular)`,
      html: `<h2>Anfrage für ein Umzugspaket von ${firstName} ${lastName}</h2><br>
            <h3>Nachname: </h3><p> ${lastName} </p><br>
            <h3>Vorname: </h3><p> ${firstName} </p><br>
            <h3>E-Mail: </h3><p> ${email} </p><br>
            <h3>Telefon: </h3><p> ${phone} </p><br>
            <h3>Gewünschtes Umzugspaket: </h3><p> ${packageSelection} </p><br>
            <h3>Auszugsort / Straße: </h3><p> ${startAddressStreet} </p><br>
            <h3>Auszugsort / Hausnummer: </h3><p> ${startAddressNumber} </p><br>
            <h3>Auszugsort / Postleitzahl: </h3><p> ${startAddressPostalCode} </p><br>
            <h3>Auszugsort / Stadt: </h3><p> ${startAddressCity} </p><br>
            <h3>Art der Immobilie am Auszugsort: </h3><p> ${startPropertySelection} </p><br>
            <h3>Stockwerk am Auszugsort: </h3><p> ${startFloorSelection} </p><br>
            <h3>Gibt es einen Fahrstuhl am Auszugsort: </h3><p> ${startElevatorSelection} </p><br>
            <h3>Gibt es einen Parkplatz am Auszugsort: </h3><p> ${startParkingSelection} </p><br>
            <h3>Länge des Abtrageweges am Auszugsort: </h3><p> ${startDistanceSelection} </p><br>
            <h3>Einzugsort / Straße: </h3><p> ${endAddressStreet} </p><br>
            <h3>Einzugsort / Hausnummer: </h3><p> ${endAddressNumber} </p><br>
            <h3>Einzugsort / Postleitzahl: </h3><p> ${endAddressPostalCode} </p><br>
            <h3>Einzugsort / Stadt: </h3><p> ${endAddressCity} </p><br>
            <h3>Art der Immobilie am Einzugsort: </h3><p> ${endPropertySelection} </p><br>
            <h3>Stockwerk am Einzugsort: </h3><p> ${endFloorSelection} </p><br>
            <h3>Gibt es einen Fahrstuhl am Einzugsort: </h3><p> ${endElevatorSelection} </p><br>
            <h3>Gibt es einen Parkplatz am Einzugsort: </h3><p> ${endParkingSelection} </p><br>
            <h3>Länge des Abtrageweges am Einzugsort: </h3><p> ${endDistanceSelection} </p><br>
            <h3>1. Wunschtermin: </h3><p> ${dateOne} </p><br>
            <h3>2. Wunschtermin: </h3><p> ${dateTwo} </p><br>
            <h3>3. Wunschtermin: </h3><p> ${dateThree} </p><br>
            <h3>Einwilligung zur Datenschutzerklärung: </h3><p> ${privacy} </p>`,
    });
    console.log("Message sent", emailRes.messageId);
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};

export default contactApi;
