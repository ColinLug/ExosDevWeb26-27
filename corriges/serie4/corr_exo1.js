for(let i = 1; i<1001; i++){
    console.log(i)
}

for(let i = 1000; i>0; i--){
    document.write(i)
}

for(let i = 3; i<1000; i+=3){
    document.write(i)
}

for(let i = 3; i<1000; i+=3){
    let new_parag = document.createElement("p")
    new_parag.innerText = i
    document.appendChild(new_parag)
}