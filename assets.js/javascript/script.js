var message = prompt('Veuillez saisir une valeur');
var reponse ="";

if (message <0 ) {
  reponse = 'Nombre négatif';
 }
 else if (message>0) {
   reponse = 'Nombre positif';
 }
 else {
   reponse ='Nul';
 }
alert(reponse);
