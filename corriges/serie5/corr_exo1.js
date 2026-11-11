let tab2d = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// 1.1
// Afficher la valeur 5 (2ème ligne, 2ème colonne)
console.log(tab2d[1][1])
// Afficher la valeur 7 (3ème ligne, 1ère colonne)
console.log(tab2d[2][0])

// 1.2
tab2d[0] = tab2d[tab2d.length-1] // équivalent ici à tab2d[0] = tab2d[2]

// 1.3
for(let i = 0; i < tab2d.length; i++){
    tab2d[i]=tab2d[tab2d.length-1]
}


// 1.4
// itère sur les lignes du tableau
for(let i = 0; i < tab2d.length; i++){
    // itère sur les colonnes de la ligne = sur un des tableaux à l'intérieur de tab2d
    // On s'arrête à la fin du tableau en tab2d[i], càd quand j est égal à sa longueur
    for(let j = 0; j < tab2d[i].length; j++){
        // affichage de la valeur
        console.log(tab2d[i][j])
    }
}

// 1.5
// comme aux points 1.2 et 1.3 mais dans une fonction
function modifyArrayWith(ligne){
    for(let i = 0; i < tab2d.length; i++){
        tab2d[i]=ligne
    }
}

