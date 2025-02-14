const numGrains = 50; // Nombre de grains de riz
const container = document.getElementById("background");

// Fonction pour générer un grain de riz
function createRiceGrain() {
    let grain = document.createElement("div");
    grain.classList.add("grain");

    // Position aléatoire
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    grain.style.left = `${x}px`;
    grain.style.top = `${y}px`;

    container.appendChild(grain);

    // Animation aléatoire avec GSAP
    gsap.to(grain, {
        x: "+=" + (Math.random() * 100 - 50), // Déplacement horizontal
        y: "+=" + (Math.random() * 100 - 50), // Déplacement vertical
        rotation: Math.random() * 360, // Rotation aléatoire
        duration: Math.random() * 3 + 2, // Entre 2 et 5s
        repeat: -1, // Animation infinie
        yoyo: true, // Fait revenir les grains en arrière
        ease: "sine.inOut"
    });
}

// Génération des grains de riz
for (let i = 0; i < numGrains; i++) {
    createRiceGrain();
}
