let reduktionsFaktor = -1;
let koerperGewicht = 0;
let alkohol_in_prozent = 0;
let getraenkMenge = 0;
let ergebnis = 0;
let endErgebnis = 0 ;
let reinerAlkohol = 0;
let vergangeneZeit = 0;

//Hauptfunktion beinhaltet Funktionen und Reihenfolge die zur Berechnung des Promillewertes nötig sind
function PromilleBerechnung() {
    <!-- Vergeben der angegebenen Zahlen in Werte mit denen gerechnet werden kann und Vergabe der Werte an die Variablen-->
    koerperGewicht = parseInt(document.getElementById("textfeld_körpergewicht").value);
    getraenkMenge = parseInt(document.getElementById("textfeld_getraenkMenge").value);
    alkohol_in_prozent = parseInt(document.getElementById("textfeld_alkoholInProzent").value);
    vergangeneZeit = parseInt(document.getElementById("textfeld_vergangene Zeit nach konsum des getränks").value);
    <!-- Überprüfung der eingegebenen Werte -->
    console.log(koerperGewicht + " Gewicht;" + getraenkMenge + " Getränkmenge;" + alkohol_in_prozent + " Prozent;" + vergangeneZeit + " Zeit");
    BerechnungReinerAlkohol();
    ErgebnisberechnungOhneAbbau();
    ErgebnisBerechnungMitAbbau();
    ErgebnisAusgabe();
    }

    //Berechnung des reinen Alkoholanteils
    function BerechnungReinerAlkohol() {
            <!-- reinen Alkohol ausrechnen-->
            reinerAlkohol = getraenkMenge*(alkohol_in_prozent / 100)*0.8;
            <!-- Überprüfung des reinen Alkoholwertes  -->
            console.log(reinerAlkohol + " reiner Alkohol");
    }

        //Wahl des Reduktionsfaktors
        function reduktionsfaktorWeiblich(){
                 reduktionsFaktor=0.6
                 document.getElementById("buttonWeiblich").style.backgroundColor = "deeppink";
                 document.getElementById("buttonMaennlich").style.backgroundColor= "gray";

        }
        function reduktionsfaktorMaennlich(){
                 reduktionsFaktor=0.7
                 document.getElementById("buttonMaennlich").style.backgroundColor = "dodgerblue"; //Um den Style des jeweils anderen Buttons zu reseten um dem User klar zu machen, welcher button ausgewählt ist.
                 document.getElementById("buttonWeiblich").style.backgroundColor = "gray";
        }

                //Berechnung des Promillewertes ohne Betrachtung des natürlichen Alkoholabbaus
                function ErgebnisberechnungOhneAbbau(){
                        console.log(reduktionsFaktor);
                        ergebnis = reinerAlkohol/(koerperGewicht*reduktionsFaktor);
                         <!-- Überprüfung Ergebnis-->
                        console.log(ergebnis);
                }

                    //Berechnung des Promillewertes mit Betrachtung des natürlichen Alkoholabbaus
                    function ErgebnisBerechnungMitAbbau(){
                             endErgebnis = ergebnis-(vergangeneZeit*0.1);
                             if (endErgebnis<0){
                             endErgebnis = 0.0;
                             }
                            console.log(endErgebnis);
                    }

                        //Ergebnisausgabe mit Veränderung des Schriftstils
                         function ErgebnisAusgabe() {
                             <!-- Überprüfung auf Tippfehler in dem Fall auf negative Zahlenwerte oder ob der Button für den Reduktionsfaktor nicht gedrückt wurde-->
                             if (koerperGewicht<0 | getraenkMenge<0 | alkohol_in_prozent<0 | vergangeneZeit<0 | reduktionsFaktor<0){
                                 document.getElementById("ergebnisAusgabe").innerHTML= "";
                                 document.getElementById("ergebnisAussage").innerHTML="Hups! Überprüfe deine Eingegebenen Werte und das ausgewählte Geschlecht!";
                             } else {
                                 <!-- Wenn alles korrekt dann wird Ergebnis ausgegeben  -->
                                 if (endErgebnis <= 0.5) {
                                     document.getElementById("ergebnisAusgabe").style.color = "#008800";
                                     document.getElementById("ergebnisAusgabe").innerHTML = endErgebnis;
                                     document.getElementById("ergebnisAussage").innerHTML = "Du darfst noch mit dem Auto fahren!";
                                 } else {
                                        if (endErgebnis>1.4){
                                            document.getElementById("ergebnisAusgabe").style.color = "#8b0000";
                                            document.getElementById("ergebnisAusgabe").innerHTML = endErgebnis;
                                            document.getElementById("ergebnisAussage").innerHTML = "Dir ist wirklich nicht mehr zu helfen XD.";
                                            document.getElementById("linkFeld").style.color = "#104E8B";
                                            document.getElementById("linkFeld").innerHTML ="Hier darfst du nun reinschauen";
                                        }else {
                                            document.getElementById("ergebnisAusgabe").style.color = "#ff0000";
                                            document.getElementById("ergebnisAusgabe").innerHTML = endErgebnis;
                                            document.getElementById("ergebnisAussage").innerHTML = "Du darfst nicht mehr mit dem Auto fahren!";
                                        }
                                 }
                             }
                        }


