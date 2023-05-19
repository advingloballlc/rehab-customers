const patientsThumb = document.querySelector(".patients_thumb");

function fetchPatients() {
  const url = `https://rehab-p701.onrender.com/auth/list`;

  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderCustomers() {
  return fetchPatients();
}
