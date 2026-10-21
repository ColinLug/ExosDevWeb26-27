let vie_totale_quille = 150
let vie_restante_quille1 = 100

let prc_vie = vie_restante_quille1/vie_totale_quille

if(prc_vie >= 0.5){
    console.log("Barre de vie verte")
}else if(prc_vie < 0.25){
    console.log("Barre de vie rouge")
}else{
    console.log("Barre de vie orange")
}

// Cette condition peut être plus explicitement écrite ainsi

if(prc_vie >= 0.5){
    console.log("Barre de vie verte")
}else if(prc_vie < 0.5 && prc_vie >= 0.25){
    console.log("Barre de vie orange")
}else{ // ou else if(prc_vie < 0.25)
    console.log("Barre de vie rouge")
}


// Pour le défi hautement pas nécessaire
let encadrement = document.createElement("div")
encadrement.style.height = "10%";
encadrement.style.width = "100%";
encadrement.style.border = "solid black 2px"
document.body.appendChild(encadrement)

let hp_bar = document.createElement("div")
hp_bar.style.height = "10%"
hp_bar.style.width = `${100*prc_vie}%`

let couleur = "blue"
if(prc_vie >= 0.5){
    couleur = "green"
}else if(prc_vie < 0.25){
    couleur = "red"
}else{
    couleur = "orange"
}
hp_bar.style.backgroundColor = couleur
hp_bar.style.display = "inline-block"
hp_bar.innerText = `${Math.round(prc_vie*10000)/100}% HP`
encadrement.appendChild(hp_bar)