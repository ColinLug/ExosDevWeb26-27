let arbres = [
    {
        espece: "genévrier",
        feuillu: false
    },{
        espece: "chêne",
        feuillu: true
    },{
        espece: "peuplier",
        feuillu: true
    },{
        espece: "sapin",
        feuillu: false
    },{
        espece: "laurier",
        feuillu: true
    },{
        espece: "pin",
        feuillu: false
    },{
        espece: "mélèze",
        feuillu: false
    },{
        espece: "if",
        feuillu: false
    }
]

let mon_arbre = arbres[0]
let long_esp = mon_arbre.espece.length

if(long_esp >= 6){
    mon_arbre.longueur = long_esp
}else if(long_esp > 3){
    if(mon_arbre.feuillu){
        console.log(`Le ${mon_arbre.espece} est un feuillu.`)
    }else{
        console.log(`Le ${mon_arbre.espece} n'est certainement pas un feuillu.`)
    }
}else{
    console.log(`Le ${mon_arbre.espece} ne sera pas traité.`)
}