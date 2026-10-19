import RandomQuote from "./RandomQuote.js";
import Quote from "./Quote.js";

class RandomQuotesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById("random-quote-btn");
    this.randomQuotePublicAPIBtn = document.getElementById(
      "random-quote-public-api-btn",
    );
    this.randomQuoteOwnAPIBtn = document.getElementById(
      "random-quote-own-api-btn",
    );
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
    if (!(newQuote instanceof Quote)) return;
    this.currentQuote = newQuote;
    this.displayCurrentQuote();
  }

  randomQuoteHandler() {
    this.changeCurrenQuote(RandomQuote.getRandomQuote());
  }

  async handleRandomQuoteViaApi(apiIsOwn = false) {
    this.changeCurrenQuote(
      apiIsOwn
        ? await RandomQuote.getRandomQuoteViaOwnAPI()
        : await RandomQuote.getRandomQuoteViaPublicAPI(),
    );
  }

  init() {
    this.randomQuoteBtn.addEventListener("click", () => {
      this.randomQuoteHandler();
    });
    this.randomQuotePublicAPIBtn.addEventListener("click", () => {
      this.handleRandomQuoteViaApi();
    });
    this.randomQuoteOwnAPIBtn.addEventListener("click", () => {
      this.handleRandomQuoteViaApi(true);
    });
  }
}

export default RandomQuotesApp;
