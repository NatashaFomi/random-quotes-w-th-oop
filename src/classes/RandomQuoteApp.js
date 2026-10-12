import RandomQuote from "./RandomQuote.js";
import Quote from "./Quote.js";

class RandomQuotesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById("random-quote-btn");
    this.randomQuoteAPIBtn = document.getElementById("random-quote-api-btn");
    this.quoteTextElement = document.getElementById("quote-text");
    this.authorElement = document.getElementById("quote-author");
    this.currentQuote = null;

    this.init();
  }

  displayCurrentQuote() {
    const { text, author } = this.currentQuote || {};
    this.quoteTextElement.textContent = this.currentQuote.formatText();
    this.authorElement.textContent = this.currentQuote.formatAuthor();
  }

  changeCurrenQuote(newQuote) {
    if (newQuote instanceof Quote) this.currentQuote = newQuote;
    this.displayCurrentQuote();
  }

  getRandomQuote() {
    this.changeCurrenQuote(RandomQuote.getRandomQuote());
  }

  getRandomQuoteViaAPI() {
    RandomQuote.getRandomQuoteViaAPI().then((quote) => {
      this.changeCurrenQuote(quote);
    });
  }

  init() {
    this.randomQuoteBtn.addEventListener("click", () => {
      this.getRandomQuote();
    });
    this.randomQuoteAPIBtn.addEventListener("click", () => {
      this.getRandomQuoteViaAPI();
    });
  }
}

export default RandomQuotesApp;
