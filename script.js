let totalPrice = 0;

function selectItems(index) {
  // Holt sich die Klasse "sho-amount"
  const elemente = document.getElementsByClassName("show-amount");
  // holt sich den Preis der parameter position
  let priceAsText = elemente[index].getAttribute("value");
  // tauscht das komma gegen einen Punkt, damit es als fließkommazahl/float bearbeitet werden kann
  let priceAsNumber = priceAsText.replace(",", ".");
  // legt den Datentypen bei der neuen Variable fest
  let price = parseFloat(priceAsNumber);

  totalPrice += price;

  //holt nur den Namen
  const element2 = document.getElementsByClassName("text");
  const fullText = element2[index].innerText;
  const product = fullText.split("\n")[0];

  displayPrice(totalPrice);
  displayGoods(price, product);
}

//Gesamten Preis anzeigen
function displayPrice() {
  const element = document.getElementById("price");
  let total = element.getAttribute("value");

  element.innerHTML = totalPrice.toFixed(2) + "<span>&#8364;</span>";
}
console.log(totalPrice);
//Produkt und Preis Liste
function displayGoods(price, product) {
  const container = document.getElementById("cart-container");

  const htmlSnippet = `
    <div class="shopping-cart">
      <span class="shopping-cart-goods">${product}:</span>
      <span class="shopping-cart-price">${price.toFixed(2)}<span>€</span></span>
      <hr />
    </div>
  `;
  container.innerHTML += htmlSnippet;
}

//Zurücksetzen Button
function resetButton() {
  const container = document.getElementById("cart-container");
  const total = document.getElementById("price");

  if (totalPrice > 0) {
    container.innerHTML = "";
    total.innerHTML = `0,00 <span>&#8364;</span>`;
    totalPrice = 0;
  }
}

function whereButton() {
  const container = document.getElementById("cart-container");
  const total = document.getElementById("price");

  alert("Bestellung für Vor Ort abgeschlossen! Gesamtbetrag: " + totalPrice + "€");
  container.innerHTML = "";
  total.innerHTML = `0,00 <span>&#8364;</span>`;
  totalPrice = 0;
}

function delieveryButton() {
  const container = document.getElementById("cart-container");
  const total = document.getElementById("price");

  if (totalPrice < 20) {
    alert("Mindestbestellwert für Lieferung: 20,00€. Aktueller Betrag: " + totalPrice + "€");
  } else {
    totalPrice += 2.5;
    alert("Bestellung für Lieferung abgeschlossen!. Gesamtbetrag: " + totalPrice.toFixed(2) + "€");
    container.innerHTML = "";
    total.innerHTML = `0,00 <span>&#8364;</span>`;
    totalPrice = 0;
  }
}
