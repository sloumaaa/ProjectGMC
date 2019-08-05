function bienvenue() {
    alert('Salut,Soyez la bienvenue dans notre site,on espére que vous allez bien vous amuser ^^');
}

function france() {
    var nouvim = document.getElementById('fr');
    nouvim.src = ('https://www.courslangues.com/sites/default/files/2015-11-int-francais-en-samusant.jpg');
    nouvim.style.width = ('414px');
    nouvim.style.height = ('107px');
}

function ciao() {
    alert("Salut les amis,on commence a faire un peux d'exercices bonne chance a tout le monde ^^");
}

function by() {
    var dessousgch = document.getElementById('buttfingch');
    dessousgch.innerText = ("J'espere que vous avez bien apprécier notre site ^^");
}

function finimage() {
    var nouvim = document.getElementById('bob');
    nouvim.src = ('http://magmalou.m.a.pic.centerblog.net/jif5dr4p.gif');
    nouvim.style.width = ('414px');
    nouvim.style.height = ('107px');
}

function bygch() {
    var dessousgch = document.getElementById('buttfindt');
    dessousgch.innerText = ("Merci de choisir notre site et a la prochaine ^^");
}

function stotal() {
    var espacevide1 = document.getElementsByClassName('vide')[0];
    var totalscore = document.getElementById('butscore');
    var chang = parseInt(totalscore.textContent);
    if (espacevide1.value === "prendre") {
        totalscore.textContent = chang + 1;
    }
    else if (espacevide1.value !== "prendre") {
        totalscore.textContent = chang - 1;
    }
    var espacevide2 = document.getElementsByClassName('vide')[1];
    var totalscore = document.getElementById('butscore');
    var chang = parseInt(totalscore.textContent);
    if (espacevide2.value === "transports") {
        totalscore.textContent = chang + 1;
    }
    else if (espacevide2.value !== "transports") {
        totalscore.textContent = chang - 1;
    }
    var espacevide3 = document.getElementsByClassName('vide')[2];
    var totalscore = document.getElementById('butscore');
    var chang = parseInt(totalscore.textContent);
    if (espacevide3.value === "commun") {
        totalscore.textContent = chang + 1;
    }
    else if (espacevide3.value !== "commun") {
        totalscore.textContent = chang - 1;
    }
    var espacevide4 = document.getElementsByClassName('vide')[3];
    var totalscore = document.getElementById('butscore');
    var chang = parseInt(totalscore.textContent);
    if (espacevide4.value === "train") {
        totalscore.textContent = chang + 1;
    }
    else if (espacevide4.value !== "train") {
        totalscore.textContent = chang - 1;
    }
    var espacevide5 = document.getElementsByClassName('vide')[4];
    var totalscore = document.getElementById('butscore');
    var chang = parseInt(totalscore.textContent);
    if (espacevide5.value === "bus") {
        totalscore.textContent = chang + 1;
    }
    else if (espacevide5.value !== "bus") {
        totalscore.textContent = chang - 1;
    }
    var espacevide6 = document.getElementsByClassName('vide')[5];
    var totalscore = document.getElementById('butscore');
    var chang = parseInt(totalscore.textContent);
    if (espacevide6.value === "remplacer") {
        totalscore.textContent = chang + 1;
    }
    else if (espacevide6.value !== "remplacer") {
        totalscore.textContent = chang - 1;
    }
    var espacevide7 = document.getElementsByClassName('vide')[6];
    var totalscore = document.getElementById('butscore');
    var chang = parseInt(totalscore.textContent);
    if (espacevide7.value === "centre") {
        totalscore.textContent = chang + 1;
    }
    else if (espacevide7.value !== "centre") {
        totalscore.textContent = chang - 1;
    }
    var espacevide8 = document.getElementsByClassName('vide')[7];
    var totalscore = document.getElementById('butscore');
    var chang = parseInt(totalscore.textContent);
    if (espacevide8.value === "vrai") {
        totalscore.textContent = chang + 1;
    }
    else if (espacevide8.value !== "vrai") {
        totalscore.textContent = chang - 1;
    }
    var espacevide9 = document.getElementsByClassName('vide')[8];
    var totalscore = document.getElementById('butscore');
    var chang = parseInt(totalscore.textContent);
    if (espacevide9.value === "faux") {
        totalscore.textContent = chang + 1;
    }
    else if (espacevide9.value !== "faux") {
        totalscore.textContent = chang - 1;
    }
    var espacevide10 = document.getElementsByClassName('vide')[9];
    var totalscore = document.getElementById('butscore');
    var chang = parseInt(totalscore.textContent);
    if (espacevide10.value === "vrai") {
        totalscore.textContent = chang + 1;
    }
    else if (espacevide10.value !== "vrai") {
        totalscore.textContent = chang - 1;
    }
    if (totalscore.textContent > 10) {
        totalscore.textContent = 10;
    }
    else if (totalscore.textContent < -10) {
        totalscore.textContent = -10;
    }
}

function repjuste() {
    var espacevide1 = document.getElementsByClassName('vide')[0];
    if (espacevide1.value === "prendre") {
        espacevide1.style.backgroundColor = ("green");
    }
    var espacevide2 = document.getElementsByClassName('vide')[1];
    if (espacevide2.value === "transports") {
        espacevide2.style.backgroundColor = ("green");
    }
    var espacevide3 = document.getElementsByClassName('vide')[2];
    if (espacevide3.value === "commun") {
        espacevide3.style.backgroundColor = ("green");
    }
    var espacevide4 = document.getElementsByClassName('vide')[3];
    if (espacevide4.value === "train") {
        espacevide4.style.backgroundColor = ("green");
    }
    var espacevide5 = document.getElementsByClassName('vide')[4];
    if (espacevide5.value === "bus") {
        espacevide5.style.backgroundColor = ("green");
    }
    var espacevide6 = document.getElementsByClassName('vide')[5];
    if (espacevide6.value === "remplacer") {
        espacevide6.style.backgroundColor = ("green");
    }
    var espacevide7 = document.getElementsByClassName('vide')[6];
    if (espacevide7.value === "centre") {
        espacevide7.style.backgroundColor = ("green");
    }
    var espacevide8 = document.getElementsByClassName('vide')[7];
    if (espacevide8.value === "vrai") {
        espacevide8.style.backgroundColor = ("green");
    }
    var espacevide9 = document.getElementsByClassName('vide')[8];
    if (espacevide9.value === "faux") {
        espacevide9.style.backgroundColor = ("green");
    }
    var espacevide10 = document.getElementsByClassName('vide')[9];
    if (espacevide10.value === "vrai") {
        espacevide10.style.backgroundColor = ("green");
    }
}

function repfaux() {
    var espacevide1 = document.getElementsByClassName('vide')[0];
    if (espacevide1.value !== "prendre") {
        espacevide1.style.backgroundColor = ("red");
    }
    var espacevide2 = document.getElementsByClassName('vide')[1];
    if (espacevide2.value !== "transports") {
        espacevide2.style.backgroundColor = ("red");
    }
    var espacevide3 = document.getElementsByClassName('vide')[2];
    if (espacevide3.value !== "commun") {
        espacevide3.style.backgroundColor = ("red");
    }
    var espacevide4 = document.getElementsByClassName('vide')[3];
    if (espacevide4.value !== "train") {
        espacevide4.style.backgroundColor = ("red");
    }
    var espacevide5 = document.getElementsByClassName('vide')[4];
    if (espacevide5.value !== "bus") {
        espacevide5.style.backgroundColor = ("red");
    }
    var espacevide6 = document.getElementsByClassName('vide')[5];
    if (espacevide6.value !== "remplacer") {
        espacevide6.style.backgroundColor = ("red");
    }
    var espacevide7 = document.getElementsByClassName('vide')[6];
    if (espacevide7.value !== "centre") {
        espacevide7.style.backgroundColor = ("red");
    }
    var espacevide8 = document.getElementsByClassName('vide')[7];
    if (espacevide8.value !== "vrai") {
        espacevide8.style.backgroundColor = ("red");
    }
    var espacevide9 = document.getElementsByClassName('vide')[8];
    if (espacevide9.value !== "faux") {
        espacevide9.style.backgroundColor = ("red");
    }
    var espacevide10 = document.getElementsByClassName('vide')[9];
    if (espacevide10.value !== "vrai") {
        espacevide10.style.backgroundColor = ("red");
    }
}

function repimage() {
    var picture = document.getElementById('reponseimm');
    var totalscore = document.getElementById('butscore');
    if (parseInt(totalscore.textContent) < 4) {
        picture.src = ('sc1.jpg');
        picture.style.width = ('200px');
        picture.style.height = ('100px');
    }
    else if (parseInt(totalscore.textContent) >= 4 && parseInt(totalscore.textContent) < 7) {
        picture.src = ('sc2.jpg');
        picture.style.width = ('200px');
        picture.style.height = ('100px');
    }
    else if (parseInt(totalscore.textContent) >= 7 && parseInt(totalscore.textContent) < 10) {
        picture.src = ('sc3.jpg');
        picture.style.width = ('200px');
        picture.style.height = ('100px');
    }
    else if (parseInt(totalscore.textContent) == 10) {
        picture.src = ('sc4.webp');
        picture.style.width = ('200px');
        picture.style.height = ('100px');
    }
}


function vide() {
    var champone = document.getElementById('pseudo');
    var champtwo = document.getElementById('pass');
    var champthree = document.getElementById('mail');
    if (champone.value == "") {
        alert("Le champ Pseudo est vide , il faut le remplir");
    }
    else if (champtwo.value == "") {
        alert("Le champ Password est vide , il faut le remplir");
    }
    else if (champthree.value == "") {
        alert("Le champ Email est vide , il faut le remplir");
    }
}

function passe1() {
    var champone = document.getElementById('pass');
    if (champone.value.length < 8) {
        alert('le mot de passe doit contenir au moins 8 caractéres')
    }
}

function passe2() {
    var champone = document.getElementById('pass');
    if (!champone.value.includes(/[0-9]/)) {
        alert("Il manque le caractére numéro");
    }
    else if (!champone.value.includes('/[a-z]/')) {
        alert("Il manque le caractére minuscule");
    }
    else if (!champone.value.includes('/[A-Z]/')) {
        alert("Il manque le caractére majuscule");
    }
}

function mail() {
    var champthree = document.getElementById('mail');
    if (!champthree.value.includes("@")) {
        alert("L'adress email n'est pas valide");
    }
}