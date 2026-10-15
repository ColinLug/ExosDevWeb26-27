## Exercice 1
Vous êtes en train de coder votre nouveau jeu révolutionnaire à mi-chemin entre un _roguelite_ et un jeu de quilles et vous voulez que la barre de vie des quilles change de couleur en fonction du pourcentage de vie restant. Soit :
```
let vie_totale_quille = 150
let vie_restante_quille1 = 100 //n'hésitez pas à faire varier cette valeur pour tester vos conditions

*** À compléter ***
```
Écrivez les conditions pour qu'en fonction du pourcentage de vie restant (*prc_vie*) le programme réagisse comme suit :
- Si *prc_vie* est égal ou plus haut que 50% : afficher "Barre de vie verte" dans la console
- Si *prc_vie* est entre 25% (compris) et 50% (non-compris) : afficher "Barre de vie orange" dans la console
- Si *prc_vie* est strictement plus bas que 25% : afficher "Barre de vie rouge" dans la console

PS: Si vous êtes motivé·exs n'hésitez pas à faire une barre de vie qui change réellement de couleur (hautement pas nécessaire)
## Exercice 2
Voici un tableau d'objets.

Écrivez des conditions pour que le programme retourne dans la console que l'arbre est un feuillu ou non (Exemple : Le _nomDelArbre_ est/n'est pas un feuillu). Utilisez les interpolations de chaînes (string) (aka littéraux de gabarits) plutôt que la concaténation de chaînes.
```
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

//Écrivez vos conditions pour la variable mon_arbre et faites varier ensuite l'index de arbres (arbres[1], arbres[2],...arbres[7])
let mon_arbre = arbres[0]

*** À compléter ***
```
Suite : Changez le script pour que, en fonction du nombre de lettres de leur espèces, le programme réagisse comme suit:
- 6 ou plus de lettres : ajout à l'objet du nombre de lettres de l'espèces sous "longueur"
- 4 ou 5 lettres : continuent d'être affichés comme précédemment
- 3 ou plus petit : il doit être dit dans la console que cet arbre ne sera pas traité

## Exercice 3

Soit :
    
    let mon_div = document.querySelector("div")
    let a = 8
    let b = -3

Écrivez des conditions qui vérifierait:
- Si la couleur du texte de `mon_div` est bleu (indice : attribut `style`)
- Si le contenu (`.innerText`) de mon_div est non-vide
- Si la longueur de son contenu (`.innerText`) est plus grand que 10
- Si `a` est pair
- Si `a` peut être divisé par 4 de façon entière (sans reste / chiffres après la virgule)
- Si `a` *ou* `b` sont plus petits que respecitvement 10 et 7
- Si `a` *et* `b` sont plus grands ou égals à 8, sinon si `a` *ou* `b` est plus petit que 0
- Si la 7ème lettre du contenu de `mon_div` est une voyelle minuscule (`['a','e', 'i', 'o', 'u', 'y']`) (n'hésitez pas à chercher dans la documentation)

Pour vous aider, vous pouvez tester dans la console du fichier "s3_exo3.html"