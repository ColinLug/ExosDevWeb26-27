let nombre_des = 500;
let tableau_valeurs = []

for (let i = 0; i < nombre_des; i++){
    let resultat = Math.floor(Math.random()*6)+1;
    
    let mon_element = document.createElement("img");


    mon_element.src = `images_des/D${resultat}.jpg`;
    mon_element.onload = function(){
        mon_element.width *= resultat
    }
    
    
    //changement de la taille des éléments
    mon_element.width = 50 * resultat
    
    // Si on veut garder la taille de base des images, la fonction onload est nécessaire
    // Sans ça, mon_element.width est égal à 0 car l'image n'a pas encore été réellement chargée dans la console
    // Si on fait ça après le chargement de la page (p. ex. dans la console), le onload n'est pas nécessaire
    mon_element.onload = function(){
        mon_element.width *= resultat
    }

    // Condition si tiré 1
    if(resultat==1){
        mon_element.style.border = "2px solid red"
    }


    // Condition impair
    if(resultat%2 != 0){

        // Ajout du résultat au tableau (pas grave si pas dans la condition, la consigne est peu claire)
        tableau_valeurs.push(resultat)

        // Ajout du dé à la page
        document.body.appendChild(mon_element);
    }

}

// ---------------------

let somme = 0
for(let i = 0; i < tableau_valeurs.length; i++){
    somme += tableau_valeurs[i]
}
console.log("La moyenne des valeurs tirées est égale à ", somme/tableau_valeurs.length)