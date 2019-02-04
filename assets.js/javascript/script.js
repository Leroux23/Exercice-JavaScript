var resultat = "<ul>";
for (var i = 0 ;i<= 100; i++) {
  if (i % 2 == 0) {
resultat +=  "<li>" + i + "</li>";
//resultat = resultat + "<li>" + i + "</li>"
}
}
resultat = resultat + "</ul>";
document.write(resultat);
