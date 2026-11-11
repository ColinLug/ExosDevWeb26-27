for(let i = 0; i<8; i++){

    for(let j = 0; j<8; j++){
        
        new_div = document.createElement("div")

        // 2.2 i est le nombre la ligne, et j de la colonne en cours
        new_div.innerHTML=`${i}.${j}`

        // 2.3 la diagonale haut-gauche / bas-droite correspond aux fois où i et j sont égaux
        if(j==i){
            new_div.className = "white"
        }else{
            new_div.className = "black"
        }

        // 2.4 les cases de gauches sont toutes celles dont l'index de colonne est plus petit que 4, et inversément
        if(j>=4){
            new_div.className = "white"
        }else{
            new_div.className = "black"
        }

        // 2.5 les cases du haut sont toutes celles dont l'index de ligne est plus petit que 4, et inversément
        if(j>=4){
            new_div.className = "white"
        }else{
            new_div.className = "black"
        }

        document.body.appendChild(new_div)
    }

    new_br = document.createElement('br')
    document.body.appendChild(new_br)
}