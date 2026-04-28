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
  //   const price = element[index].innerText;

  //   //holt Text und price
  //   //   const element2 = document.getElementsByClassName("text");
  //   //   const product = element2[index].innerText;
}

function displayPrice(totalPrice) {
  const element = document.getElementById("price");
  let total = element.getAttribute("value");

  element.innerHTML = totalPrice.toFixed(2) + "<span>&#8364;</span>";
}

function displayGoods(price, product) {
  const container = document.getElementById("cart-container");

  const htmlSnippet = `
    <div class="shopping-cart">
      <span class="shopping-cart-goods">${product}</span>
      <span class="shopping-cart-price">${price.toFixed(2)}<span>€</span></span>
      <hr />
    </div>
  `;
  container.innerHTML += htmlSnippet;
}
