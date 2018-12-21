var namnge = [];
var namnta = [];

function läggtillnamn() {
  namnge[namnge.length] = document.getElementById("textruta").value;
  //lägger till texten i textruta till sista positionen i arrayen namnge
  namnta[namnta.length] = document.getElementById("textruta").value;

  document.getElementById("skage").innerHTML = namnge.join(" | ");
  document.getElementById("skata").innerHTML = namnta.join(" | ");
  //Skriver in hela arrayen i båda textrutorna

  document.getElementById("textruta").value = "";
  //tömmer textrutan
}

function slumpage() {
  var x = Math.floor(Math.random()*namnge.length);
  //slumpar positionen av ett av objekten i arrayen namnge
  var givare = namnge[x];
  //sparar objektet på slumpad position i variabeln givare
  document.getElementById("Namngepres").innerHTML = givare;
  //ändrar textrutan i presenten givare till det slumpade objektet
  namnge.splice(x, 1);
  //ersätter 1 objekt från plats x med ingenting
  document.getElementById("skage").innerHTML = namnge.join(" | ");
  //uppdaterar den skrivna listan av namn
}
function slumpata() {
  var x = Math.floor(Math.random()*namnta.length);
  var mottagare = namnta[x];
  document.getElementById("Namntapres").innerHTML = mottagare;
  namnta.splice(x, 1);
  document.getElementById("skata").innerHTML = namnta.join(" | ");
}
