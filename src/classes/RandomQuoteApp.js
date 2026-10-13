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
  randomQuoteHandler() {
    this.changeCurrenQuote(RandomQuote.getRandomQuote());
  }

  async randomQuoteViaAPIHandler() {
    this.changeCurrenQuote(await RandomQuote.getRandomQuoteViaAPI());
  }

  init() {
    this.randomQuoteBtn.addEventListener("click", () => {
      this.randomQuoteHandler();
    });
    this.randomQuoteAPIBtn.addEventListener("click", () => {
      this.randomQuoteViaAPIHandler();
    });
  }
}

export default RandomQuotesApp;
