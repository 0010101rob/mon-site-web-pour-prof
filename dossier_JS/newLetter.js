const element=document.getElementById('signup-container');

let disparaitre=document.getElementById('disparaitre');
let apparaitre=document.getElementById('apparaitre');

disparaitre.addEventListener('click', function () {
		// body...
		console.log("merci pour l'inscription");
		element.classList.add('cache');
		element.classList.remove('affiche')
});
apparaitre.addEventListener('click', function (){
	// body...
	alert("seul le boutton de fermeture (close) est operationnel pour le moment")
	element.classList.add('affiche');
	element.classList.remove('cache')
});

document.addEventListener('DOMContentLoaded', function() {
    const welcomeMessage = document.getElementById('bienvenue_conteneur');
    const hasBeenShown = sessionStorage.getItem('welcomeMessageShown');

    // 1. Vérifie si l'indicateur existe dans sessionStorage
    if (!hasBeenShown) {
        // 2. Si l'indicateur n'existe PAS, on affiche le message
        if (welcomeMessage) {""
			welcomeMessage.classList.add('visible');
			disparaitre_un.addEventListener('click', function () {
				// body...
				welcomeMessage.classList.add('cache');
			});
			// Affiche le message
        }
        // 3. On crée l'indicateur dans sessionStorage
        // Le message est maintenant marqué comme "affiché" pour cette session.
        sessionStorage.setItem('welcomeMessageShown', 'true');
    } else {
        // Si l'indicateur existe, le message reste caché.
        if (welcomeMessage) {
           welcomeMessage.classList.add('cache');
        }
    }
});