const deck = remplirDeck();

const main_joueureuse_1 = distribuer(deck);
const main_joueureuse_2 = distribuer(deck);
const main_joueureuse_3 = distribuer(deck);
const main_joueureuse_4 = distribuer(deck);

let joueureuse_affichee = null;

// Evénement sur les boutons
document.querySelector("#j1").addEventListener("click", afficher);
document.querySelector("#j2").addEventListener("click", afficher);
document.querySelector("#j3").addEventListener("click", afficher);
document.querySelector("#j4").addEventListener("click", afficher);
document.querySelector("#deck").addEventListener("click", afficher);

/**
 * Remplit un tableau qui correspond à un deck.
 * @returns {Array} un tableau qui correspond à un deck de 36 cartes.
 */
function remplirDeck() {
  let couleurs = ["♠", "♥", "♦", "♣"];
  let deck_a_remplir = [];
  couleurs.forEach((couleur) => {
    for (let num_carte = 6; num_carte <= 14; num_carte++) {
      deck_a_remplir.push(num_carte + couleur);
    }
  });
  return deck_a_remplir;
}

/**
 * Distribue 9 cartes aléatoirement depuis un paquet (ou deck) de cartes
 * @param {Array} paquet le deck de cartes
 * @returns {Array} la main distribuée
 */
function distribuer(paquet) {
  let main = [];
  for (let carte = 1; carte <= 9; carte++) {
    let aleatoire = Math.floor(Math.random() * paquet.length);
    main.push(paquet.splice(aleatoire, 1)[0]);
  }
  return main;
}

function afficher(event) {
  const joueureuse = event.target.id[1];
  let main_a_afficher = null;

  switch (joueureuse) {
    case "1":
      main_a_afficher = main_joueureuse_1;
      break;
    case "2":
      main_a_afficher = main_joueureuse_2;
      break;
    case "3":
      main_a_afficher = main_joueureuse_3;
      break;
    case "4":
      main_a_afficher = main_joueureuse_4;
      break;
    default:
      main_a_afficher = remplirDeck();
  }

  const espace_affichage = document.querySelector("#espace_affichage");

  if (espace_affichage.innerHTML == "" || joueureuse !== joueureuse_affichee) {
    joueureuse_affichee = joueureuse;
    espace_affichage.innerHTML = "";
    main_a_afficher.forEach((carte) => {
      const img = document.createElement("img");
      img.src = "./cartes/" + carte + ".gif";
      espace_affichage.appendChild(img);
    });
  } else {
    espace_affichage.innerHTML = "";
  }
}

console.log(
  main_joueureuse_1,
  main_joueureuse_2,
  main_joueureuse_3,
  main_joueureuse_4
);