let actual_video = document.getElementById("videoPlayer");
let actual_input;

function setVideo() {
    // Seleziona l'input
    actual_input = document.querySelector(".input");
    
    if (actual_video !== actual_input.value) {
        let inputValue = actual_input.value.trim();

        // Gestisci URL completi o relativi
        let url;
        try {
            url = new URL(inputValue, window.location.origin);
        } catch (e) {
            // Se l'URL non è valido, assume che sia un percorso relativo o nome del file
            url = null;
        }

        let filename;
        if (url && url.pathname) {
            // Estrai il nome del file dall'URL
            let pathname = url.pathname;
            filename = pathname.substring(pathname.lastIndexOf('/') + 1);
        } else {
            // Se non è un URL completo, assume che inputValue sia già il nome o percorso relativo
            filename = inputValue.split('/').pop(); // ottieni solo il nome del file
        } 
        d 

        // Controlla che il file termini con .mp4
        if (filename.endsWith('.mp4')) {
            let percorsoBase = "/videos/"; // modifica questa linea secondo il tuo percorso
            actual_video.src = percorsoBase + filename;
        } else {
            // Se non termina con .mp4, puoi decidere cosa fare
            // Ad esempio, mostra un errore o usa l'intero input
            actual_video.src = inputValue; // o un percorso di default
        }
    }

    // Richiama la funzione dopo 2.5 secondi
    setTimeout(setVideo, 2500);
}

// Esegui al caricamento
setVideo();