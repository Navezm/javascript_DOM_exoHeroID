// Exo 5 - Input


// À l'aide de HTML ou JS (au choix ^^)

// - Crée 6 labels et 6 inputs 
//     labels: (Nom, Prénom, Age, Genre, Clan et Pouvoir)
// - Crée 1 bouton "CREATE"

// Crée ensuite, 6 span

// Crée une Class avec des propriétés ayant les mêmes noms que tes labels;
// Tu créera au fur et à mesure, une instance "myHero" qui obtiendra des propriétés selon le contenu que l'on entre dans les différents inputs.

class Personnage{
    constructor(nom, prenom, age, genre, clan, pouvoir){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.genre = genre;
        this.clan = clan;
        this.pouvoir = pouvoir;
    };
};

// Déclaration variable 
let input = document.getElementsByTagName("input");
let label = document.getElementsByTagName("label");
let button = document.querySelector("button");
let span = document.getElementsByTagName("span");
let fiche = document.getElementById("fiche_perso");
let select = document.querySelector("select");
let option = document.getElementsByTagName("option");
let img = document.getElementById("img_fiche");

// Fais en sorte que lorsque "CREATE" est cliqué, les inputs se changent en span et affichent la valeur entrée.
button.addEventListener("click", function(){
    fiche.style.display = "block";
    for (let i = 0; i < input.length; i++){
        span[i].innerHTML = input[i].value;
    };
    if(select.selectedIndex == "1"){
        img.setAttribute("src", "./public/img/Fight.jpg");
    } else if(select.selectedIndex == "2"){
        img.setAttribute("src", "./public/img/Issou.jpg");
    } else if(select.selectedIndex == "3"){
        img.setAttribute("src", "./public/img/Jacquouille.jpg");
    } else if(select.selectedIndex == "4"){
        img.setAttribute("src", "./public/img/Kratos.jpg");
    } else if(select.selectedIndex == "5"){
        img.setAttribute("src", "./public/img/LaraCroft.jpg");
    } else if(select.selectedIndex == "6"){
        img.setAttribute("src", "./public/img/link.jpeg");
    } else if(select.selectedIndex == "7"){
        img.setAttribute("src", "./public/img/louiXVI.png");
    } else if(select.selectedIndex == "8"){
        img.setAttribute("src", "./public/img/malefique.jpg");
    } else if(select.selectedIndex == "9"){
        img.setAttribute("src", "./public/img/Mario.jpg");
    } else if(select.selectedIndex == "10"){
        img.setAttribute("src", "./public/img/pikatchu.jpg");
    } else if(select.selectedIndex == "11"){
        img.setAttribute("src", "./public/img/ronflex.png");
    } else if(select.selectedIndex == "12"){
        img.setAttribute("src", "./public/img/shinigami.png");
    } else if(select.selectedIndex == "13"){
        img.setAttribute("src", "./public/img/ValhallaF.jpg");
    } else if(select.selectedIndex == "14"){
        img.setAttribute("src", "./public/img/ValhallaM.jpeg");
    } else if(select.selectedIndex == "15"){
        img.setAttribute("src", "./public/img/Xena.jpg");
    };
});

let myHero = new Personnage(span[0].innerHTML, span[1].innerHTML, span[2].innerHTML, span[3].innerHTML, span[4].innerHTML, span[5].innerHTML);
// Pour conclure, ajoute une image à ton hero ID
// (tu trouvera un bon nombre d'images dans ce dossier. Si aucune image ne te plaît, tu peux en rajouter une toi-même ^^)

// N'hésite pas à styliser ton ID comme bon te semble ;)