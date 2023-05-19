import { useState, useEffect } from "react";

export default function PatientsPage() {
  const [patientRehab, setPatientRehab] = useState("");

  useEffect(() => {
    fetch(`https://rehab-p701.onrender.com/auth/list`, {
      cache: "no-store",
    })
      .then((response) => response.json())
      .then(({ data }) => {
        const patients = data.patients;
        console.log(patients);
        setPatientRehab(patients);
        console.log(patientRehab);
      });
  });

  return (
    <div>
      <h2>Our Patients</h2>
      {patientRehab &&
        patientRehab.map((user) => (
          <>
            <li key={user.name}>Ім'я: {user.firstName}</li>
            <li key={user.time}>Дата проведення: {user.time}</li>
          </>
        ))}
    </div>
  );
}
