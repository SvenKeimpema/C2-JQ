//Array voor namen maken.
let column = [];
//Array voor booleans, div links is true | div rechts is false
let booleanLeft = [];
let nameIndex = "";

//Bij klik op de button.
function voegNaamToe() {
    //naam ophalen uit de input
    naam = document.querySelector(".inputVeld").value;
    //als naam niet leeg is doorgaan.
    if (naam.length > 1) {
        //naam plaatsen in de array, en boolean true zetten.
        booleanLeft.push(true);
        column.push(naam);
        //input wordt geleegd.
        document.querySelector(".inputVeld").value = "";
        //arrays zijn nu correct gevuld, door naar volgende functie
        updateColumn();
    }
}

//Naar de divs printen
function updateColumn() {
    //Eerst het oude veld legen.
    $(".veld-1").empty();
    $(".veld-2").empty();
    //Nu in for loop, alles opnieuw printen.
    for (var i = 0; i < column.length; i++) {
        //boolean true is naar linker div | boolean false is rechter div.
        if (booleanLeft[i] == true) {
            $(".veld-1").append("<p class="+column[i]+" onclick='printNumber("+i+")'>"+column[i]+"</p>");
        } else {
            $(".veld-2").append("<p class="+column[i]+" onclick='printNumber("+i+")'>"+column[i]+"</p>");
        }
    }
}

//de geklikte naam geeft zijn array positie door aan nameIndex, in console is het te volgen.
function printNumber(index) {
    nameIndex = index;
    console.log(nameIndex + " is gezet");
    console.log(booleanLeft[nameIndex]);
}

//bediening van de knop, boolean switchen en opnieuw naar updateColumn
function leftToRight() {
    booleanLeft[nameIndex] = false;
    updateColumn();
}

//bediening van de knop, boolean switchen en opnieuw naar updateColumn
function rightToLeft() {
    booleanLeft[nameIndex] = true;
    updateColumn();
}
