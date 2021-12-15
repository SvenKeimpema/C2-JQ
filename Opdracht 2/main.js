var nederlands = ["eindopdracht 2", "Kies een taal", "Aanhef", "Naam", "Adres", "Woonplaats",
                  "Postcode", "Geboortedatum", "Nationaliteit", "Beroep", "Opmerkingen",
                  "(heer / mevrouw)", "(voor + achternaam)", "straat + huisnummer"];
var engels = ["Final assignment 2", "Choose your language", "Gender", "Name", "Adress",
              "place of residence", "Postal code", "Birthday", "Nationality", "profession",
              "comments", "(sir / miss)", "(first + surname)", "(street + housenumber)"];

function translateToDutch() {
    for (var i = 0; i < 14; i++) {
        $("." + i).empty();
        $("." + i).append(nederlands[i]);
    }
}

function translateToEnglish() {
    for (var i = 0; i < 14; i++) {
        $("." + i).empty();
        $("." + i).append(engels[i]);
    }
}

let aanhef = "";
var aanhefMan = /^man|heer|sir$/;
var aanhefVrouw = /^mevrouw|vrouw|miss$/;

let oldSelected = "";

function checkSelected(currVar) {

    if(currVar != undefined) { if(oldSelected.valueOf() === currVar.valueOf()) return;}

    switch(oldSelected) {
        case "Aanhef": if(!checkAanhef()) alert("incorrect Aanhef"); break;
        case "Naam": if(!checkNaam()) alert("incorrect Naam"); break;
        case "Adres": if(!checkAdres()) alert("incorrect Adres"); break;
        case "Woonplaats": if(!checkWoonplaats()) alert("incorrect Woonplaats"); break;
        case "Postcode": if(!checkPostcode()) alert("incorrect Postcode"); break;
        case "Geboorte": if(!checkGeboortedatum()) alert("incorrect Geboorte"); break;
        case "Nationaliteit": if(!checkNationaliteit()) alert("incorrect Nationaliteit"); break;
        case "Beroep": if(!checkBeroep()) alert("incorrect Beroep"); break;
        default: break;
    }
}

function checkAanhef() {
    aanhef = document.querySelector("#aanhef").value;
    //console.log(aanhef);
    checkSelected("Aanhef");

    if (aanhefMan.test(aanhef)) {
        //document.getElementById("controleAanhef").innerHTML = " true ";
        $(document.body).css("background", "rgb(50, 101, 232)");
    } else if (aanhefVrouw.test(aanhef)) {
        //document.getElementById("controleAanhef").innerHTML = " true ";
        $(document.body).css("background", "rgb(240, 109, 242)");
    } else {
        //document.getElementById("controleAanhef").innerHTML = " false ";
        $(document.body).css("background-image", "linear-gradient(to right, rgb(240, 109, 242), rgb(50, 101, 232))");
        oldSelected = "Aanhef";
        return false;
    }
    oldSelected = "Aanhef";
    return true;
}

let naam = "";
var naamRegex = /^([a-zA-z]{2,14})( )([a-zA-Z]{2,26})$/;

function checkNaam() {
    naam = document.querySelector("#naam").value;
    //console.log(naam);
    checkSelected("Naam");
    if (!naamRegex.test(naam)) {
        oldSelected = "Naam";
        return false;
    }

    oldSelected = "Naam";
    return true;
}

let adres = "";
var adresRegex = /^([a-zA-Z]{2,30})( )([0-9]{1,4}[a-zA-Z]?)$/;

function checkAdres() {
    adres = document.querySelector("#adres").value;
    console.log(adres);
    checkSelected("Adres");
    if (!adresRegex.test(adres)) {
        oldSelected = "Adres";
        return false;
    }

    oldSelected = "Adres";
    return true;
}

let woonplaats = "";
var woonplaatsRegex = /^([a-zA-Z]{2,30})$/;

function checkWoonplaats() {
    woonplaats = document.querySelector("#woonplaats").value;
    console.log(woonplaats);
    checkSelected("Woonplaats");
    if (!woonplaatsRegex.test(woonplaats)) {
        oldSelected = "Woonplaats";
        return false;
    }

    oldSelected = "Woonplaats";
    return true;
}

let postcode = "";
var postcodeRegex = /^([1-9]{1}[0-9]{3})( )?([a-zA-Z]{2})$/;

function checkPostcode() {
    postcode = document.querySelector("#postcode").value
    checkSelected("Postcode");
    if (!postcodeRegex.test(postcode)) {
        oldSelected = "Postcode";
        return false;
    }

    oldSelected = "Postcode";
    return true;
}

function checkGeboortedatum() {

}

function checkNationaliteit() {

}

function checkBeroep() {

}

function berekenLeeftijd(geboortedatum) {

}
