for(let i = 0; i<8; i++){

    for(let j = 0; j<8; j++){
        
        new_div = document.createElement("div")

        new_div.innerHTML="&nbsp;"

        if((j+i)%2==0){
            new_div.className = "white"
        }else{
            new_div.className = "black"
        }

        document.body.appendChild(new_div)
    }

    new_br = document.createElement('br')
    document.body.appendChild(new_br)
}