// Variables pour mémoriser l'emplacement de la case vide
let vlig = 4;
let vcol = 4;
let nbclic = 0;

// Fonction pour échanger les cases
function move(lig, col) {
    // Calcul des différences entre les coordonnées de la case sélectionnée et la case vide
    let difflig = Math.abs(lig - vlig);
    let diffcol = Math.abs(col - vcol);

    // Vérification si le déplacement est valide (1 case de distance dans une direction)
    if ((difflig === 1 && diffcol === 0) || (difflig === 0 && diffcol === 1)) {
        // Mise à jour du nombre de déplacements
        nbclic++;

        // Mise à jour de l'interface utilisateur avec le nouveau nombre de déplacements
        document.getElementById("nbDeplacements").innerHTML = "<strong>Nombre de déplacements : " + nbclic + "</strong>";

        // Identifiants des boutons concernés
        let boutonName = 'case' + lig + col;
        let videName = 'case' + vlig + vcol;

        // Récupération des nœuds correspondants aux boutons
        let boutonNode = document.getElementById(boutonName);
        let videNode = document.getElementById(videName);

        // Récupération des fils textuels des deux boutons
        let boutonValue = boutonNode.innerHTML;
        let videValue = videNode.innerHTML;

        // Échange des fils textuels
        boutonNode.innerHTML = videValue;
        videNode.innerHTML = boutonValue;

        // Échange des classes des boutons
        boutonNode.classList.toggle("emptycase");
        videNode.classList.toggle("emptycase");

        // Enlève le focus sur le bouton cliqué
        boutonNode.blur();

        // Mémoriser le nouvel emplacement de la case vide
        vlig = lig;
        vcol = col;
    }
}
