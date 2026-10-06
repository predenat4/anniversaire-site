// js/main.js

const bgMusic = document.getElementById('bg-music');
const soundToggle = document.getElementById('sound-toggle');
let isPlaying = false;

// Fonction centrale de navigation
function goToAct(actNumber) {
    document.querySelectorAll('.act').forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
    });
    const nextAct = document.getElementById(`act${actNumber}`);
    if (nextAct) {
        nextAct.classList.remove('hidden');
        nextAct.classList.add('active');
    }
}

function initializeAudioAndGoToAct1() {
    // 1. Lancer l'audio
    bgMusic.play()
        .then(() => {
            isPlaying = true;
            volPath.setAttribute('d', pathOn);
            // 2. Attendre un court instant avant de changer de page
            setTimeout(() => {
                goToAct(1);
            }, 100);
        })
        .catch(e => {
            alert("Erreur audio : " + e.message + ". Vérifiez le bouton silencieux physique de l'iPhone.");
            console.error("Lecture impossible:", e);
        });
}


// Lancement de l'expérience
function startExperience() {
    bgMusic.play().then(() => {
        isPlaying = true;
        volPath.setAttribute('d', pathOn);
    }).catch(e => console.log("Autoplay bloqué, attend interaction"));
    goToAct(2); // Passe à l'Acte 2 (Le texte)
}

// Bascule du son
const volPath = document.getElementById('vol-path');
const pathOn = "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z";
const pathOff = "M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z";

soundToggle.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        volPath.setAttribute('d', pathOff);
    } else {
        bgMusic.play();
        volPath.setAttribute('d', pathOn);
    }
    isPlaying = !isPlaying;
});

// Effet Machine à écrire (Acte 1)
async function typeWriter(elementId, text, speed) {
    const element = document.getElementById(elementId);
    element.textContent = '';
    for (let i = 0; i < text.length; i++) {
        element.textContent += text.charAt(i);
        await new Promise(resolve => setTimeout(resolve, speed));
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', async () => {
    // S'assurer que l'audio est chargé
    bgMusic.load();

    // Création des coeurs flottants
    const heartsContainer = document.getElementById('background-hearts');
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 10}s`;
        heart.style.animationDuration = `${Math.random() * 5 + 5}s`;
        // Ajout d'une taille aléatoire pour plus de réalisme
        const size = Math.random() * 15 + 10;
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heartsContainer.appendChild(heart);
    }

    await typeWriter('typewriter-text', 'Avant tout... Joyeux anniversaire Numa Nirdjemska 🎂', 60);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await typeWriter('typewriter-text-2', 'Mais j\'ai aussi quelque chose à te dire aujourd\'hui. Tu es prête ?', 60);
    document.getElementById('btn-act1').classList.remove('hidden');
});

// Fonction pour le bouton "Non" taquin
function moveBtnNo() {
    const btnNo = document.getElementById('btn-no');
    
    // Assurer que le bouton reste dans la zone visible, en tenant compte de sa taille
    const maxX = window.innerWidth - btnNo.offsetWidth - 20;
    const maxY = window.innerHeight - btnNo.offsetHeight - 20;
    
    const x = Math.max(10, Math.random() * maxX);
    const y = Math.max(10, Math.random() * maxY);
    
    btnNo.style.position = 'fixed'; // Fixed est mieux pour rester dans le viewport mobile
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
}

// Horloge temps réel
function updateClock() {
    const now = new Date();
    const dateString = now.toLocaleDateString('fr-FR', { 
        year: 'numeric', month: 'long', day: 'numeric' 
    });
    const timeString = now.toLocaleTimeString('fr-FR', { 
        hour: '2-digit', minute: '2-digit', second: '2-digit' 
    });
    const clockElement = document.getElementById('live-clock');
    if (clockElement) {
        clockElement.textContent = `${dateString} - ${timeString}`;
    }
}
setInterval(updateClock, 1000);
updateClock();
