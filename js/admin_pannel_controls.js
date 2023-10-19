var jobId, Dept, vacancyName, Experience, deadLine;

function readFom() {
    jobId = document.getElementById("job_id").value;
    Dept = document.getElementById("job_department").value;
    vacancyName = document.getElementById("job_position").value;
    Experience = document.getElementById("job_experience").value;
    deadLine = document.getElementById("job_deadline").value;
    console.log(jobId, Dept, vacancyName, Experience, deadLine);
}


document.getElementById("insert").onclick = function () {
    readFom();

    if (jobId, Dept, vacancyName, Experience, deadLine) {
        firebase
        .database()
        .ref("vacancies/" + jobId)
        .set({
            job_id: jobId,
            job_department: Dept,
            job_position: vacancyName,
            job_experience: Experience,
            job_deadline: deadLine,
        });
    alert("New vacancy added");
    } else {
        alert("Please enter a Job ID to insert vacancy data.");
    }

    
    document.getElementById("job_id").value = "";
    document.getElementById("job_department").value = "";
    document.getElementById("job_position").value = "";
    document.getElementById("job_experience").value = "";
    document.getElementById("job_deadline").value = "";
};

document.getElementById("read").onclick = function () {
    readFom();

    if (jobId) {
        firebase
        .database()
        .ref("vacancies/" + jobId)
        .on("value", function (snap) {
            document.getElementById("job_id").value = snap.val().job_id;
            document.getElementById("job_department").value = snap.val().job_department;
            document.getElementById("job_position").value = snap.val().job_position;
            document.getElementById("job_experience").value = snap.val().job_experience;
            document.getElementById("job_deadline").value = snap.val().job_deadline;
        });
    } else {
        alert("Please enter a Job ID to read vacancy data.");
    }
};

document.getElementById("update").onclick = function () {
    readFom();

    if (jobId, Dept, vacancyName, Experience, deadLine) {
        firebase
        .database()
        .ref("vacancies/" + jobId)
        .update({
            //   rollNo: rollV,
            job_department: Dept,
            job_position: vacancyName,
            job_experience: Experience,
            job_deadline: deadLine,
        });
    alert("Details Updated");
    } else {
        alert("Please enter a full details to update vacancy data.");
    }

    
    document.getElementById("job_id").value = "";
    document.getElementById("job_department").value = "";
    document.getElementById("job_position").value = "";
    document.getElementById("job_experience").value = "";
    document.getElementById("job_deadline").value = "";
};

document.getElementById("delete").onclick = function () {
    readFom();

    if (jobId) {
        firebase
            .database()
            .ref("vacancies/" + jobId)
            .remove();
        alert("vacancy removed");
    } else {
        alert("Please enter a Job ID to delete vacancy data.");
    }
    document.getElementById("job_id").value = "";
    document.getElementById("job_department").value = "";
    document.getElementById("job_position").value = "";
    document.getElementById("job_experience").value = "";
    document.getElementById("job_deadline").value = "";

};
