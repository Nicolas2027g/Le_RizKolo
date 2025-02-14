document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("reservationForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche le rechargement de la page

        // Récupérer le nom et prénom
        const fullName = document.getElementById("fullName").value.trim();
        const date = document.getElementById("date").value.trim();

        if (fullName !== "") {
            confirmationMessage.innerHTML = `✅ Merci Monsieur ${fullName} pour votre réservation le ${date} !`;
            confirmationMessage.classList.remove("d-none");

            // Efface le formulaire après 3 secondes
            setTimeout(() => {
                form.reset();
                confirmationMessage.classList.add("d-none");
            }, 5000);
        }
    });
});
