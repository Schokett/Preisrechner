let totalPrice = 0;

function selectItems(index) {
  //holt nur price
  const elemente = document.getElementsByClassName("show-amount");

  let priceAsText = elemente[index].getAttribute("value");

  let priceAsNumber = priceAsText.replace(",", ".");

  let price = parseFloat(priceAsNumber);

  totalPrice += price;

  console.log("Ausgewählt: " + price.toFixed(2) + "€");
  console.log("Neue totalPrice: " + totalPrice.toFixed(2) + "€");

  //   const price = element[index].innerText;
  //   console.log(price);

  //holt nur den Namen
  //   const element2 = document.getElementsByClassName("text");
  //   const fullText = element2[index].innerText;
  //   const product = fullText.split("\n")[0];
  //   console.log(product);

  //   //holt Text und price
  //   //   const element2 = document.getElementsByClassName("text");
  //   //   const product = element2[index].innerText;
  //   //   console.log(product);
}
