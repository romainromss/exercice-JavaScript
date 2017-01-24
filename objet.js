// TODO : ajoutez ici la définition de l'objet perso
let perso = {
    nom: "Aurora",
    sante: 150,
    force: 25,
    xp: 0,
    
    decrire: function () {
        let descript = this.nom + " a " + this.sante + " points de vie, " + this.force + " en force  et "  + this.xp + " points d'éxperience"
        return descript
    }
}
console.log(perso.decrire());
// Aurora est blessée par une flèche
perso.sante = perso.sante - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

// Aurora apprend une nouvelle compétence
perso.xp = perso.xp + 15;

console.log(perso.decrire());

//***************************************************************

// TODO : ajoutez ici la définition de l'objet chien
let chien = {
    nom: "paf",
    race: "staff",
    taille: 200,
    
    aboyer: function (){
        return " Grr ! Grr ! " 
    }
}

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");

console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());

//***************************************************************

let r = Number(prompt("Entrez le rayon d'un cercle :"));
let cercle = {
    rayon: r, 
    
    perimetre: function(){
     return 2 * this.rayon * Math.PI;
    },
    aire: function (){
    return this.rayon * this.rayon * Math.PI;
    }

};

// TODO : ajoutez ici la définition de l'objet cercle
console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());*/
//***************************************************************
let compte = {
    titulaire: "Alex",
    solde: 0,
    
    crediter: function(montant){
    this.solde = this.solde + montant;    
    },
    
    debiter: function(montant){
    this.solde = this.solde - montant;
    },

    decrire: function(){
    let description = " titulaire du compte: " + this.titulaire + " Solde: " + this.solde + " euros "
        return description ;
    }
    
};
console.log(compte.decrire());
var credit = Number(prompt("Entrez le montant à créditer :"));
compte.crediter(credit);
var debit = Number(prompt("Entrez le montant à débiter :"));
compte.debiter(debit);
console.log(compte.decrire());

//#########################################################################################################################
// TODO : ajoutez ici la définition de l'objet Chien
 var Chien = {
     init : function (nom, race, taille){
         this.nom = nom
         this.race= race
         this.taille = taille
     },
     aboyer: function (){
         var aboiement = " Wouaf ! Wouaf ! "
        if (this.taille <25){
            aboiement = " Kaii ! Kaii ! "
        } else if (this.taille > 60){
            aboiement = " Grr ! Grr "
        }
         return aboiement
     }
 };
var crokdur = Object.create(Chien);
crokdur.init("Crokdur", "mâtin de Naples", 75);
console.log(crokdur.nom + " est un " + crokdur.race + " mesurant " + crokdur.taille + " cm");
console.log("Tiens, un chat ! " + crokdur.nom + " aboie : " + crokdur.aboyer());
var pupuce = Object.create(Chien);
pupuce.init("Pupuce", "bichon", 22);
console.log(pupuce.nom + " est un " + pupuce.race + " mesurant " + pupuce.taille + " cm");
console.log("Tiens, un chat ! " + pupuce.nom + " aboie : " + pupuce.aboyer());

//###############################################################

const compte = {
        titulaire: "Alex",
        solde: 0,  
 
    crediter: function (montant){
        this.solde = this.solde + montant
    }, 
    
    debiter : function (montant){
        this.solde = this.solde - montant
    }, 
        
    decrire : function (){
       var description ="titulaire " + this.titulaire + " solde " + this.solde
       return description;
    }
};

console.log(compte.decrire())
var credit = Number(prompt(" entrez votre montant a crediter "))
compte.crediter(credit)
var debit = Number(prompt(" entrez votre montant a débiter "))
compte.debiter(debit)
console.log(compte.decrire())

//##############################################################
const Chien = {
    init : function (nom, race, taille){
        this.nom = nom
        this.race = race
        this.taille = taille
    },
    
    aboyer: function(){
        if(this.taille <20 )
            return " waouf !  woauf !"
        else if  (this.taille < 25 )
            return " kaii ! kaii ! "
        else (this.taille > 60 )
            return " Grr ! Grr ! "
    }
    
}

var crokdur = Object.create(Chien);

crokdur.init("Crokdur", "mâtin de Naples", 75);

console.log(crokdur.nom + " est un " + crokdur.race + " mesurant " + crokdur.taille + " cm");

console.log("Tiens, un chat ! " + crokdur.nom + " aboie : " + crokdur.aboyer());
var pupuce = Object.create(Chien);
pupuce.init("Pupuce", "bichon", 22);
console.log(pupuce.nom + " est un " + pupuce.race + " mesurant " + pupuce.taille + " cm");
console.log("Tiens, un chat ! " + pupuce.nom + " aboie : " + pupuce.aboyer());*/


//***************************************************************

const perso = {
    initPerso : function (nom, sante, force, xp, or, cle) { 
    this.nom = nom;
    this.sante = sante;
    this.force = force;
    this.xp = xp;
    this.or = or;
    this.cle = cle;
    }, 
};
let aurora = Object.create(perso);
    aurora.initPerso(" Aurora ", 150, 25, 0, 10, 1);
let glacius = Object.create(perso);
    glacius.initPerso(" Glacius ", 130, 30, 0, 10, 1);

const adversaire = {
    initMechant : function (nom, sante, force, race ){
    this.nom = nom;
    this.force = force;
    this.sante = sante;
    this.race = race;
    },
};
let zozog = Object.create(adversaire);
    zozog.initMechant(" Zozog ", 40, 20, " Orc ");
    perso.decrire = function () {
let description = this.nom + " a " + this.sante + " points de vie, " + this.force + " en force, "     +  this.xp + " points d'expérience, " + this.or + " pièces d'or et " + this.cle + " clé(s) " 
        return description;
};   

    adversaire.attaquer = function (cible){
let degats = this.force;
    console.log (this.nom + " attaque " + cible.nom + " et lui inflige " + degats + " points de dégats "); 
    cible.sante = cible.sante - degats;
};
    perso.attaquer = function (cible){
let degats = this.force;
    console.log (this.nom + " attaque " + cible.nom + " et lui inflige " + degats + " points de dégats "); 
    cible.sante = cible.sante - degats;
    if (cible.sante <= 0){
        console.log(" Zozog est mort ! ");
        glacius.xp = glacius.xp + 10;
        glacius.or = glacius.or + 10;
        glacius.cle = glacius.cle + 1;
        console.log(" Glacius a tué Zozog et gagne 10 points d'expérience, ainsi que 10 pièces d'or et 1 clé(s) ")
    }
};

// test pour voir comprehension adversaire.decrire = function (){
        let description =this.nom + this.force + this.sante + this.race
        return description;
};

console.log(" Bienvenue dans ce jeu d'aventure ! voici nos courageux héros : ");
console.log(aurora.decrire());
console.log(glacius.decrire());
console.log(" Un affreux monstre arrive: c'est un orc nommé ZoZog ");
// test pour voir compréhension console.log(zozog.decrire())
zozog.attaquer(aurora);
console.log(" Aurora a encore " + aurora.sante + " points de vie ");
zozog.attaquer(glacius);
console.log(" Glacius a encore " + glacius.sante + " points de vie ");
aurora.attaquer(zozog);
console.log(" Zozog a encore " + zozog.sante + " points de vie ");
glacius.attaquer(zozog);
console.log(aurora.decrire());
console.log(glacius.decrire());*/

//#########################################################################################################################

// TODO : ajoutez ici la définition des objets nécessaires
var CompteBancaire = {
    initCB : function (nom, solde){
    this.nom = nom
    this.solde = solde
    },
     decrire : function (){
        return "titulaire " + this.nom + " solde " + this.solde;
    },
    debiter : function (montant) {
        this.solde -= montant    
    },
    crediter : function (montant){
        this.solde += montant  
    },    
};

var CompteEpargne = Object.create(CompteBancaire)
CompteEpargne.initCE = function(nom, solde, interet) {
    this.initCB(nom, solde)
    this.interet = interet
};
    
CompteEpargne.ajouterInterets = function (){
    this.solde *= (1 + this.interet)
};

 
   
var compte1 = Object.create(CompteBancaire);
compte1.initCB("Alex", 100);
var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);

console.log("Voici l'état initial des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrire());


var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));
compte1.debiter(montant);

compte2.crediter(montant);

// Calcule et ajoute les intérêts au solde du compte
compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");
console.log(compte1.decrire());
console.log(compte2.decrire());*/
//**************************************************************

var Mousquetaires = {
    init : function(nom){
        this.nom = nom    
    },
    decrire : function(nom){ 
    return this.nom
    },
};
  
var mous1 = Object.create(Mousquetaires);
mous1.init("Athos")

var mous2 = Object.create(Mousquetaires);
mous2.init("Porthos")

var mous3 = Object.create(Mousquetaires);
mous3.init("Aramis")


var mousquetaires = [];
mousquetaires.push(mous1);
mousquetaires.push(mous2);
mousquetaires.push(mous3);

for (var i = 0; i < mousquetaires.length; i ++) 
console.log(mousquetaires[i].decrire())


var mous4 = Object.create(Mousquetaires);
mous4.init("Dartagnan")

mousquetaires.push(mous4)
  mousquetaires.forEach (function (mousquetaires){
    console.log(mousquetaires.decrire());
});

//=
var valeurs = [11, 3, 7, 2, 9, 10];
var somme = 0
for (var i = 0; i < valeurs.length; i ++){
    somme = somme + valeurs[i]
}
    console.log(somme);*/

//#########################################################################################################################
var valeurs = [11, 3, 7, 2, 9, 10];
var maximum = valeurs[0]
for(var i = 0; i < valeurs.length; i ++){
    if (valeurs[i] > maximum){
    maximum = valeurs[i]   
    }
}
console.log(maximum)

//#########################################################################################################################
var tableau = []
while (mot !== "stop"){
    var mot = prompt ("entrez un mot ou tapez stop pour arreter")
    if(mot !== "stop"){
        tableau.push(mot)
    }
}
tableau.forEach (function (mot){
    console.log(mot)
})

//#########################################################################################################################
var Film = {
    init: function (titre, annee, realisateur) {
        this.titre = titre;
        this.annee = annee;
        this.realisateur = realisateur;
    },
    decrire: function () {
        return this.titre + this.annee + this.realisateur
    }
};

var film1 = Object.create(Film)
film1.init(" Le loup de Wall Street ", 2013, " Martin Scorese ")   
var film2 = Object.create(Film)
film2.init(" Vice-Versa ", 2015, " Pete Docter ")

var film3 = Object.create(Film)
film3.init("Babysitting ", 2013, " Phillipe Lacheau et Nicolas Benamou ")

var films = [];
films.push(film1);
films.push(film2);
films.push(film3);


films.forEach(function (film) {
    console.log(film.decrire());
});
//#########################################################################################################################

var Chien = {
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    },
};

var crokdur = Object.create(Chien)
crokdur.init(" Crokdur ", " matin de Naples ", 75 )

var pupuce  = Object.create(Chien)
pupuce.init(" Pupuce ", " bichon ", 22 )

var medor = Object.create(Chien)
medor.init(" Medor ", " labrador ", 58 )

var chiens = [];
chiens.push(crokdur);
chiens.push(pupuce);
chiens.push(medor);

console.log("Le chenil héberge " + chiens.length + " chiens :");
chiens.forEach(function (chien) {
    console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm. " +
        "Il aboie : " + chien.aboyer());
});

