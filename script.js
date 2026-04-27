function selectItems(index) {
  //holt nur Preis
  const element = document.getElementsByClassName("show-amount");
  const price = element[index].innerText;
  console.log(price);

  //holt nur den Namen
  const element2 = document.getElementsByClassName("text");
  const fullText = element2[index].innerText;
  const product = fullText.split("\n")[0];
  console.log(product);

  //holt Text und Preis
  //   const element2 = document.getElementsByClassName("text");
  //   const product = element2[index].innerText;
  //   console.log(product);
}
