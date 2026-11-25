let tab = [
    [1,0,0,0,0],
    [0,1,0,0,0],
    [0,0,1,0,0],
    [0,0,0,1,0],
    [0,0,0,0,1],
]

for(let i = 0; i<50; i++){
    let mon_image = document.createElement("img")
    mon_image.src = "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/010e_Wild_Bearded_Vulture_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg/960px-010e_Wild_Bearded_Vulture_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg?utm_source=fr.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
    mon_image.alt = "Une image de gypaète barbu en vol."
    mon_image.height = 100
    mon_image.style.border = "2px solid yellow"
    document.body.appendChild(mon_image)
}
document.querySelectorAll("img")[20].style.border = "2px solid red"

for(let i = 0; i<5; i++){
    document.body.appendChild(document.createElement("br"))
    for(let j = 0; j<5; j++){
        let nv_div = document.createElement("div")
        nv_div.innerHTML = "&nbsp;"
        if(tab[i][j]==1){
            nv_div.style.backgroundColor = "blue"
        }
        document.body.appendChild(nv_div)
    }
}

