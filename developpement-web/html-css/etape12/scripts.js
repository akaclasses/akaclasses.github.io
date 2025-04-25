// Sélectionner toutes les images de la galerie
const galleryImages = document.querySelectorAll('.gallery-item img');

// Ajouter un écouteur d'événement à chaque image
galleryImages.forEach(image => {
    image.addEventListener('click', function(event) {
        // Récupérer l'URL de l'image cliquée
        const imageUrl = event.target.src;
        
        // Afficher l'URL dans la console
        console.log("URL de l'image cliquée:", imageUrl);
        // ou avec des backticks:
        // console.log(`URL de l'image cliquée: ${imageUrl}`);
    });
});