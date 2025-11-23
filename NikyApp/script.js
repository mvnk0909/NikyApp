// Kategorie textů — sem si přidáš svoje větičky ❤️
const texts = {
    chybis: [
        "Tady doplníš svoje.",
        "Sem si nahážeš svoje věty.",
        "Cokoliv chceš napsat Niky."
    ],

    spatna: [
        "Sem dáš věty pro špatnou náladu.",
        "Tady napíšeš svoje message.",
        "Co jí chceš říct, když je down."
    ],

    uklidnit: [
        "Věty pro uklidnění sem.",
        "Další tvoje věta.",
        "Cokoliv, co chceš."
    ]
};

// Audio soubory
const audioFiles = [
    "audio/a1.mp3",
    "audio/a2.mp3"
];

// Polaroidy
const photoFiles = [
    "photos/p1.jpg",
    "photos/p2.jpg",
    "photos/p3.jpg"
];

// Přepínání obrazovek
function openScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// Náhodný text
function showRandomText(cat) {
    const box = document.getElementById(`text-${cat}`);
    const arr = texts[cat];
    box.textContent = arr[Math.floor(Math.random() * arr.length)];
}

// Náhodné audio
function playRandomAudio() {
    const audio = document.getElementById("audio-player");
    audio.src = audioFiles[Math.floor(Math.random() * audioFiles.length)];
    audio.play();
}

// Polaroid random chaos
function loadPolaroids() {
    const container = document.getElementById("polaroid-container");
    container.innerHTML = "";

    // vygeneruj 6 random fotek
    for (let i = 0; i < 6; i++) {
        const img = photoFiles[Math.floor(Math.random() * photoFiles.length)];

        const div = document.createElement("div");
        div.classList.add("polaroid");

        const pic = document.createElement("img");
        pic.src = img;

        div.appendChild(pic);
        container.appendChild(div);
    }
}
