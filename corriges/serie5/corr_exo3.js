function debug(){
    console.log("Mon script execute cette ligne !")
}

function appel(nom){
    // utilisation de l'interpolation de chaînes
    console.log(`Hey ! ${nom}`)
}

function foisDeux(nombre){
    return nombre*2
}

function bizarreCetteFonction(nombre){
    // condition pour les traitements différentiels
    if(nombre<10){
        return `${nombre}${nombre+1}`
    }else{
        return `${nombre}${nombre-1}`
    }
}

// Boucle commençant à 6, jusqu'à 13 compris
for(let i = 6; i<=13; i++){
    // on stocke le résultat de la multiplication par 2 de ce qui est retourné par bizarreCetteFonction()
    let resultat= foisDeux(bizarreCetteFonction(i))
    // Écriture de la condition 
    if(resultat<150 || resultat>2500){
        appel(resultat/2)
    }else{
        debug()
    }
}