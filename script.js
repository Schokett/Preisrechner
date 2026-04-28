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

  //   console.log(price);
  //   console.log(totalPrice);
  //   console.log("Ausgewählt: " + price.toFixed(2) + "€");
  //   console.log("Neue totalPrice: " + totalPrice.toFixed(2) + "€");

  //holt nur den Namen
  const element2 = document.getElementsByClassName("text");
  const fullText = element2[index].innerText;
  const product = fullText.split("\n")[0];
  //   console.log(product);

  displayPrice(totalPrice);
  displayGoods(price, product);
  //   const price = element[index].innerText;
  //   console.log(price);

  //   //holt Text und price
  //   //   const element2 = document.getElementsByClassName("text");
  //   //   const product = element2[index].innerText;
  //   //   console.log(product);
}

function displayPrice(totalPrice) {
  const element = document.getElementById("price");
  let total = element.getAttribute("value");

  element.innerHTML = totalPrice.toFixed(2) + "<span>&#8364;</span>";
  //   console.log(totalPrice);
}

function displayGoods(price, product) {
  console.log("bin verbunden " + product + " " + price);
}
