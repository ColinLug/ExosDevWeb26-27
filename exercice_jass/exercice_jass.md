# Coder (le début d') un jeu de jass
Le but de cet exercice sera de créer certaines fonctions de bases pour modéliser un jeu de jass. Prenons pas à pas le problème.

## Créer et modéliser le paquet de cartes
Pour représenter une carte nous allons utiliser des String composés du numéro de la carte (6,7,8,9,10,11,12,13,14, où 11 sera le valet, 12 la reine, 13 le roi et 14 l'as) suivi de sa couleur ('♠', '♥', '♦', '♣')

**Par exemple** : '13♠' sera le roi de pique, '7♦' sera le 7 de carreaux,...

Notre paquet de cartes sera un tableau de toutes les cartes possibles. Écrivez une fonction permettant de créer ce paquet de cartes

## Créer une fonction d'affichage des cartes
Nous souhaiterions afficher dans la page web les images des cartes. Écrivez une fonction prenant en paramètre une liste de cartes et qui ajouteraient à la page des balises <img> correspondantes. Aidez vous du dossier d'images joint.

## Tirage d'une carte au hasard dans le paquet
Nous voulons maintenant avoir un bout de code qui permettra de tirer une carte au hasard dans le paquet. Pour ce faire, nous pourrions utiliser la fonction [.splice(startindex, nbr)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#parameters).

## Distribuer 9 cartes (une main)
À présent, nous souhaitons créer une fonction prenant un paquet de cartes en argument et retournant 1 main (tableau) de 9 cartes tirées aléatoirement dans le paquet.

## Mise en place de la partie
Maintenant, nous allons mettre ensemble toutes les fonctions créées. D'abord en créant un paquet de carte, puis en tirant 4 mains de 9 cartes chacune et enfin, en affichant dans notre page HTML chacune des mains. Avec ça nous avons mis en place le début d'une partie de jass.

## Bonus: afficher les cartes avec des boutons
Au lieu d'afficher chacune des mains, nous aimerions avoir 4 boutons (pour chacun·e des joueur·euse) qui affichent la main de la joueur·euse concernée (J1, J2, J3, J4). Il faudrait idéalement que les cartes ne s'ajoutent pas indéfiniment à la page (si on clique sur J1, puis sur J2 les cartes de J1 disparaissent au profit de celles de J2). Nous aimerions également un 5ème bouton "Afficher paquet" qui montrerait l'entièreté du paquet de cartes.

Bonus bonus : Simuler une plie de jass (aucune indication, bonne chance)
