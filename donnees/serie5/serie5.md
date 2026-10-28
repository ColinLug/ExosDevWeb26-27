# Série 5
## Exercice 1
Voici un tableau à 2 dimensions : 
```javascript
let tab2d = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
```
1.1 : Affichez dans la console la valeur `5` qui est contenue dans le tableau, puis la valeur `7`

1.2 : Modifiez la première ligne pour qu'elle soit égale à la dernière ligne

1.3 : À l'aide d'une boucle, faites en sorte que chaque ligne soient équivalentes à la dernière ligne

1.4 : Affichez dans la console toutes les valeurs (numériques) contenues dans `tab2d`

1.5 : Écrivez une fonction qui prend un `Array` en paramètre et qui modifie toutes les lignes de `tab2d` en le paramètre passé (ex : maFonction(['a','b']) change `tab2d` en [['a','b'],['a','b'],['a','b']])

## Exercice 2
Téléchargez le dossier exercice2_damier et étudiez son code en prêtant attention au rôle de la double boucle. Ensuite, modifiez le code comme suit :

2.1 : Mettez en commentaire ou supprimez la ligne `7` et observez la différence. Cherchez à quoi correspond `&nbsp;`

2.2 : Écrivez à l'intérieur de chaque case son numéro de ligne et de colonne (exemple : 3.2 pour la 3ème ligne 2ème colonne 8.8 pour la case en bas à droite)

2.3 : Modifiez la condition pour que les cases de la diagonale `haut-gauche -> bas-droite` soient blanches et toutes les autres noires

2.4 : Modifiez la condition pour que les cases à gauches soient noires tandis que celles à droites soient blanches (ex: une ligne [nnnnbbbb])

2.5 : Modifiez la condition pour que les cases en haut soient noires tandis que celles en bas soient blanches (ex: une colonne [nnnnbbbb])

## Exercice 3
3.1 : Créez une fonction nommée `debug` qui ne prend aucun paramètre et qui écrit dans la console `"Mon scripte execute cette ligne !"`

3.2 : Créez une fonction nommée `appel` qui prend un paramètre et qui écrit dans la console `"Hey ! "` suivi du paramètre

3.3 : Créez une fonction nommée `foisDeux` qui prend un paramètre (en supposant qu'il est numérique) et retourne le double du paramètre

3.4 : Créez une fonction nommée `bizzareCetteFonction` qui prend un paramètre (en supposant qu'il est numérique) et qui retourne une chaîne de caractère composée du paramètre et paramètre + 1 si c'est strictement au dessous de 10 et composée de paramètre et paramètre - 1 sinon (exemples : `bizzareCetteFonction(6)` retourne `67`, `bizzareCetteFonction(12)` retourne `1211`)

3.5 : Chaînons à présent ces fonctions. Écrivez une boucle qui itère entre les nombres 6 et 13 (compris). Pour chacun des nombres, vérifiez si le double du retour de `bizzareCetteFonction` est strictement plus petit que 150 **ou** strictement plus grand que 2500. Si c'est le cas appelez la fonction `appel` avec le résultat divisé par 2 en paramètre, sinon appelez `debug`

## Exercice 4 (**optionnel**)
Si `JavaScript` vous manque pendant la semaine d'études libres (been there), vous pouvez essayer cet exercice (peut être trop complexe pour ce qu'il essaye de faire) qui reprend beaucoup de la matière vue jusqu'à présent. Voyez le plus comme un défi optionnel que comme quelque chose que vous devriez (savoir) faire.


Voici l'inventaire d'un magasin dans un objet JS avec le nom d'article comme clé et son prix comme valeur:

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

4.1 : Créez-vous une liste de courses (càd un tableau d'éléments de l'inventaire) et parcourez-la pour calculer le prix total (ex: let ma_liste = ['sandwich', 'houmous', 'houmous', 'houmous'] --> Coût total : 22 francs.). Essayez de le faire avec un [forEach()](https://www.w3schools.com/js/js_array_iteration.asp#mark_foreach)

4.2 : Vous vous retrouvez à présent dans un magasin alien pour lequel vous devez créer un inventaire de 30 articles. Imaginez une boucle qui remplira cet inventaire sur le même modèle que celui ci-dessus, avec les prérogatives suivantes:

- Le nom de l'article doit être une suite d'un nombre aléatoire (entre 4 et 12) de lettres minuscules, elles aussi, aléatoires
- Le prix de chaque article est un entier aléatoire, mais toujours impair (entre 1 et 99)

Exemple de résultat :

    {'hcrwdxchamc': 15, 'ivixnvqfz': 19, 'lunjow': 73, 'mfbhudqhdsr': 55, 'mizndbzbazkx': 39, etc...}

Pour vous aider, voici une liste des lettres minuscules :

    let liste_lettres = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ]