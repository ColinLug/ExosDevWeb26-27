# Corrigé série 2
## Exercice 1

(Note : si vous êtes déjà dans la console, le `console.log` n'est pas nécessaire, mais est important dans un fichier `script.js`)

1.1.

      let a = 13;
      
      a+=1
      // Équivalent : a = 12

      console.log(a)

1.2.

      let a = 8;
        
      console.log(a+1)

1.3. 

      let a = "William";

      let b = "Ritter";

      console.log(a+b)

1.4.

      let a = "William";
      
      let b = "Ritter";
     
      console.log(a + " " + b)

1.5.

      let a = 3; 
      
      let b = a; 
      
      let c = "chantre" ;
      
      c + b + a

1.6. 

      let a = 3; 
      
      let b = a; 
      
      let c = "chantre" ;
      
      c + (b + a)

1.7.

      let lst_cours_ISH = ["Dev_web", "Mod_rec", "Meth_quanti"]

      console.log(lst_cours_ISH[0])

1.8.

      let cles_moodle = {Mod_rec:"AucuneIdee26", Meth_quanti: "AucuneIdee26", Dev_web:"DEVWEB26"}

      console.log(cles_moodle.Dev_web)
      // Ou console.log(cles_moodle["Dev_web"])

1.9

      let cours_ISH = [
            {
                  nom_cours: "Développement Web",
                  cle_moodle: "DEVWEB25",
                  etudiantes: ["Linus Torvalds", "Margaret Hamilton", "Christine Peterson"]
            },
            {
                  nom_cours: "Mathématiques Ludiques",
                  cle_moodle: "MATH25",
                  etudiantes: ["Ada Lovelace", "Aaron Swartz", "Linus Torvalds", "Margaret Hamilton"]
            },
            {
                  nom_cours: "Modèles et Récits",
                  cle_moodle: "AucuneIdee25",
                  etudiantes: ["Linus Torvalds", "Margaret Hamilton"]
            }
      ]

      console.log(cours_ISH[0].etudiantes[2])
      // ou console.log(cours_ISH[0]["etudiantes"][2])
      
      console.log(cours_ISH[1].etudiantes[1])
      // ou console.log(cours_ISH[1]["etudiantes"][1])
