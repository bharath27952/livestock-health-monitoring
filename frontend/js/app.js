fetch("http://localhost:5000/api/dashboard")
    .then(response => response.json())
    .then(data => {
        document.getElementById("livestockCount").textContent =
            data.totalLivestock;

        document.getElementById("healthyCount").textContent =
            data.healthyAnimals;

        document.getElementById("vaccinationCount").textContent =
            data.vaccinationsDue;

        document.getElementById("alertCount").textContent =
            data.healthAlerts;
    })
    .catch(error => {
        console.error("Backend connection error:", error);
    });