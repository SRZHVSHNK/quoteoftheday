const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Do not wait to strike till the iron is hot, but make it hot by striking.",
    "The best way to predict the future is to create it.",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    "You miss 100% of the shots you don’t take.",
    "The only way to do great work is to love what you do.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Opportunities don't happen. You create them.",
    "Don't watch the clock; do what it does. Keep going.",
    "The future depends on what you do today.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Act as if what you do makes a difference. It does.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "You cannot swim for new horizons until you have courage to lose sight of the shore.",
    "The only place where success comes before work is in the dictionary.",
    "The way to get started is to quit talking and begin doing.",
    "Don't be afraid to give up the good to go for the great.",
    "I find that the harder I work, the more luck I seem to have.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "The secret of success is to be ready when your opportunity comes.",
    "Success is not in what you have, but who you are."
];

const quoteElement = document.getElementById('QuoteBox');
const button = document.getElementById('btnQuote');

button.addEventListener('click', function () {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
});