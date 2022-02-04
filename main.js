let reduktionsFaktor = 0;
let koerperGewicht = 0;
let alkohol_in_prozent = 0;
let getraenkMenge = 0;
let ergebnis = 0;
let endErgebnis = 0 ;
let reinerAlkohol = 0;
let vergangeneZeit = 0;
getraenkminimum = 0;

function buttonClick() {
    <!-- Entnahme und Umwandlung der Zahlen aus den Textfeldern in Zahlen mit denen der Computer rechnen kann-->
    koerperGewicht = parseInt(document.getElementById("textfeld_körpergewicht").value);
    getraenkMenge = parseInt(document.getElementById("textfeld_getraenkMenge").value);
    alkohol_in_prozent = parseInt(document.getElementById("textfeld_alkoholInProzent").value);
    vergangeneZeit = parseInt(document.getElementById("textfeld_vergangene Zeit nach konsum des getränks").value);
    <!-- Überprüfung der eingegebenen Werte -->
    console.log(koerperGewicht + " Gewicht;" + getraenkMenge + " Getränkmenge;" + alkohol_in_prozent + " Prozent;" + vergangeneZeit + " Zeit");
    <!-- Berechnung Zwischenergebnis -->
    zwischenBerechnung();
    <!-- Berechnung Endergebnis-->
    ErgebnisBerechnung();
    <!-- Berechnung Abbau -->
    abbauAlkohol();
    <!-- Ergebnisausgabe-->
    EndergebnisAusgabe();
}

    function zwischenBerechnung() {
            <!-- reinen Alkohol ausrechnen-->
            reinerAlkohol = getraenkMenge*(alkohol_in_prozent / 100)*0.8;
            <!-- Überprüfung des reinen Alkoholwertes  -->
            console.log(reinerAlkohol + " reiner Alkohol");
    }

        function reduktionsfaktorWeiblich(){
                 reduktionsFaktor=0.6
                 document.getElementById("buttonWeiblich").style.backgroundColor = "deeppink";
                 document.getElementById("buttonMaennlich").style.backgroundColor= "gray";

        }

        function reduktionsfaktorMaennlich(){
                 reduktionsFaktor=0.7
                 document.getElementById("buttonMaennlich").style.backgroundColor = "dodgerblue"; //Um den Style des jeweils anderen Buttons zu reseten um dem User klar zu machen welcher button ausgewählt ist.
                 document.getElementById("buttonWeiblich").style.backgroundColor = "gray";
        }

                function ErgebnisBerechnung(){
                        console.log(reduktionsFaktor);
                        ergebnis = reinerAlkohol/(koerperGewicht*reduktionsFaktor);
                         <!-- Überprüfung Ergebnis-->
                        console.log(ergebnis);
                }

                    function abbauAlkohol(){
                             endErgebnis = ergebnis-(vergangeneZeit*0.1);
                             if (endErgebnis<0){
                             endErgebnis = 0.0;
                             }
                            console.log(endErgebnis);
                    }
                         function EndergebnisAusgabe() {
                            if (endErgebnis <= 0.5) {
                            document.getElementById("ergebnisAusgabe").style.color = "#008800";
                            document.getElementById("ergebnisAusgabe").style.fontStyle = "Calibri";
                            document.getElementById("ergebnisAusgabe").style.fontSize = "xx-large";
                            document.getElementById("ergebnisAusgabe").style.fontStyle = "bold";
                            document.getElementById("ergebnisAusgabe").innerHTML= endErgebnis;
                            document.getElementById("ergebnisAussage").innerHTML= "Du darfst noch mit dem Auto fahren";
                            } else {
                              document.getElementById("ergebnisAusgabe").style.color = "#ff0000";
                              document.getElementById("ergebnisAusgabe").style.fontStyle = "Calibri";
                              document.getElementById("ergebnisAusgabe").style.fontSize = "xx-large";
                              document.getElementById("ergebnisAusgabe").style.fontStyle = "bold";
                              document.getElementById("ergebnisAusgabe").innerHTML= endErgebnis;
                              document.getElementById("ergebnisAussage").innerHTML= "Du darfst nicht mehr mit dem Auto fahren";
                            }
                        }

                            function getränkhinzufügen(getraenkminimum) {
                                    //versuchen ein name selbst zu schreiben mit einem string zb getränk und dann mit einem zweiten string eine zahl anzufügen die sich mit jedem durchlauf der for schleife erhöht mit jedem durchlauf der for schleife wird ein neues element eingefügt wessen werte in den rechner übergeben werden bei jedem press auf einen button muss sich i der for schleife erhöhen so kann man auch nicht unendlich getränke angeben

                                i = getraenkminimum+1;
                                for (i= 0; i<=4;i+){
                                    //dsa ist neu
                                    }

                            }

