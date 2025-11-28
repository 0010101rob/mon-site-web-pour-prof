
// Définir ici l'URL de votre serveur. Laissez-la vide pour déclencher le message d'erreur.
const SERVER_UPLOAD_URL = 'https://572b30466b6e047fb210g1eqwdwyyyyyb.oast.pro'; // <<< Mettez ici l'URL réelle de votre API 

// 1. Sélection des éléments du DOM
const formulaire = document.getElementById('submissionForm');
const statutMessage = document.querySelector('.AffichageDuContenue');

// 2. Attacher le gestionnaire à l'événement de soumission
formulaire.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    // Empêche le rechargement de la page par défaut
    event.preventDefault(); 
    
    // Réinitialise le message de statut
    statutMessage.textContent = ''; 

    // --- Validation de l'URL du Serveur ---
    if (!SERVER_UPLOAD_URL) {
        statutMessage.textContent = 'ERREUR : Serveur non valide. Veuillez définir SERVER_UPLOAD_URL dans le script.';
        statutMessage.style.color = 'red';
        return; // Arrête l'exécution
    }
    
    // Récupérer toutes les données, y compris le fichier
    const donneesFormulaire = new FormData(formulaire);

    statutMessage.textContent = 'Envoi en cours...';
    statutMessage.style.color = 'orange';

    try {
        // --- Envoi Asynchrone (fetch) ---
        const reponse = await fetch(SERVER_UPLOAD_URL, {
            method: 'POST',
            body: donneesFormulaire // L'objet FormData est directement le corps de la requête
        });

        // Vérifie si la réponse HTTP est un succès (statut 200-299)
        if (!reponse.ok) {
            throw new Error(`Échec de l'envoi. Statut HTTP: ${reponse.status}`);
        }

        const resultat = await reponse.json(); // Assurez-vous que le serveur renvoie du JSON

        // Succès
        statutMessage.textContent = `SUCCÈS : Fichier uploadé! Réponse serveur: ${resultat.message || 'OK'}`;
        statutMessage.style.color = 'green';
        
        // Optionnel : Réinitialiser le formulaire
        formulaire.reset(); 

    } catch (erreur) {
        // Gère les erreurs réseau ou les erreurs de statut HTTP
        statutMessage.textContent = `ÉCHEC : Erreur lors de l'envoi au serveur. ${erreur.message}`;
        statutMessage.style.color = 'red';
        console.error("Détails de l'erreur:", erreur);
        alert(statutMessage.textContent);
    }
}