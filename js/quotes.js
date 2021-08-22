const quotes = [
  {
    quote:
      "Invest for the long haul. Don’t get too greedy and don’t get too scared.",
    author: "Shelby M.C. Davis",
  },
  {
    quote:
      "The best way to measure your investing success is not by whether you’re beating the market but by whether you’ve put in place a financial plan and a behavioral discipline that are likely to get you where you want to go.",
    author: "Benjamin Graham",
  },
  {
    quote:
      "Waiting helps you as an investor and a lot of people just can’t stand to wait. If you didn’t get the deferred-gratification gene, you’ve got to work very hard to overcome that.",
    author: "Charlie Munger",
  },
  {
    quote:
      "The stock market is a device to transfer money from the impatient to the patient.",
    author: "Warren Buffett",
  },
  {
    quote:
      "Your success in investing will depend in part on your character and guts and in part on your ability to realize, at the height of ebullience and the depth of despair alike, that this too, shall pass.",
    author: "Jack Bogle",
  },
  {
    quote:
      "Thousands of experts study overbought indicators, head-and-shoulder patterns, put-call ratios, the Fed’s policy on money supply…and they can’t predict markets with any useful consistency, any more than the gizzard squeezers could tell the Roman emperors when the Huns would attack.",
    author: "Peter Lynch",
  },
  {
    quote:
      "The function of economic forecasting is to make astrology look respectable.",
    author: "John Kenneth Galbraith",
  },
  {
    quote:
      "Though tempting, trying to time the market is a loser’s game. $10,000 continuously invested in the market over the past 20 years grew to more than $48,000. If you missed just the best 30 days, your investment was reduced to $9,900.",
    author: "Christopher Davis",
  },
  {
    quote:
      "You make most of your money in a bear market, you just don’t realize it at the time.",
    author: "Shelby Cullom Davis",
  },
  {
    quote: "An investment in knowledge pays the best interest.",
    author: "Benjamin Franklin",
  },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const financeQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = financeQuotes.quote;
author.innerText = financeQuotes.author;

const quoteShow = document.querySelector(".quote");
const overlayChange = document.querySelector(".overlay");
const todoShow = document.querySelector(".todo-form");

function onSubmit() {
  quoteShow.classList.remove("hidden");
  overlayChange.classList.remove("overlay-opacity");
  todoShow.classList.remove("hidden");
}

document.querySelector(".login-form").addEventListener("submit", onSubmit);

if (savedUsername !== null) {
  quoteShow.classList.remove("hidden");
  overlayChange.classList.remove("overlay-opacity");
  todoShow.classList.remove("hidden");
} else {
}
