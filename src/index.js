function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: "You have within you, right now",
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
