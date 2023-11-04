 // Reference to the vacancies in the Firebase database
 const vacanciesRef = firebase.database().ref('vacancies');

 // Listen for changes in the department dropdown
 const departmentSelect = document.getElementById('departmentSelect');
 departmentSelect.addEventListener('change', () => {
     displayVacancies();
 });

 // Fetch data from Firebase and display it
 function displayVacancies() {
     const selectedDepartment = departmentSelect.value;
     vacanciesRef.once('value')
         .then(snapshot => {
             const data = snapshot.val();
             const filteredData = filterVacanciesByDepartment(data, selectedDepartment);
             populateTable(filteredData);
         })
         .catch(error => console.error('Error fetching vacancies data:', error));
 }

 // Filter vacancies based on selected department
 function filterVacanciesByDepartment(data, department) {
     if (department === '') {
         return data;  // Return unfiltered data when no department is selected
     }

     const filteredData = {};
     for (const jobId in data) {
         if (data.hasOwnProperty(jobId) && data[jobId].job_department === department) {
             filteredData[jobId] = data[jobId];
         }
     }

     return filteredData;
 }

 // Populate table with data
 function populateTable(data) {
     const tableDiv = document.getElementById('vacanciesTable');
     tableDiv.innerHTML = '';  // Clear previous table

     const table = document.createElement('table');

     // Create table header
     const headerRow = table.insertRow();
     const headers = ['Job ID', 'Position', 'Department', 'Experience in years', 'Application Deadline'];
     headers.forEach(headerText => {
         const th = document.createElement('th');
         th.appendChild(document.createTextNode(headerText));
         headerRow.appendChild(th);
     });

     // Populate table rows with data
     for (const jobId in data) {
         if (data.hasOwnProperty(jobId)) {
             const job = data[jobId];
             const row = table.insertRow();
             const values = [job.job_id, job.job_position, job.job_department, job.job_experience, job.job_deadline];
             values.forEach(value => {
                 const cell = row.insertCell();
                 cell.appendChild(document.createTextNode(value));
             });
         }
     }

     tableDiv.appendChild(table);
 }

 // Initial display of vacancies
 displayVacancies();