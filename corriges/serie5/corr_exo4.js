let inventaire = {
    'tomate': 3,
    'chocolat' : 5,
    'toast':2,
    'houmous':4,
    'serpillère':25,
    'el tony':2,
    'aubergine':1,
    'chips':6,
    'sandwich':10,
    'livre':18,
    'sandales': 46,
    'tasse': 14,
    'jeu': 39,
}

let ma_liste = ['sandwich', 'houmous', 'houmous', 'houmous',]
let prix_total = 0

// Pour chaque élément de ma liste, j'accède à l'objet dont la clé est mon élément de liste
ma_liste.forEach(arti =>{
    prix_total += inventaire[arti] // similaire : prix_total = prix_total + inventaire[arti]
})
console.log(`Prix total : ${prix_total} francs.`)


let liste_lettre = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

// On initialise un objet vide pour notre inventaire
let inventaire_alien = {}

// Première boucle : création des 30 articles
for(let i = 0; i < 30; i++){

    // On intialise une chaîne de caractères vide pour notre nom d'article
    let nom_art = ""
    // On tire un nombre de lettres
    let nombre_lettres = Math.floor(Math.random()*9 + 4)

    //Puis on va faire une boucle pour choisir une lettre et l'ajouter à notre chaîne vide
    for(let j =0 ; j < nombre_lettres; j++){
        let lettre_alea_indice = Math.floor(Math.random()*26)
        nom_art += liste_lettre[lettre_alea_indice]
    }
    console.log(nom_art.length)

    // On initialise notre prix à une valeur entre 1 e 99
    let prix_art = Math.ceil(Math.random()*99)
    
    // Vérifie si le nombre est pair
    if(prix_art % 2 == 0){
        prix_art += 1 //Si oui, alors on lui ajoute 1 pour qu'il soit impair
    }

    inventaire_alien[nom_art] = prix_art
}
console.log(inventaire_alien)