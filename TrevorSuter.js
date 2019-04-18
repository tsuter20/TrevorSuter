var quoteArray = ['Never regret anything that made you smile. - Mark Twain', 'Everything you can imagine is real. - Pablo Picasso', 'What we think, we become. - Buddha', 'All limitations are self-imposed. - Oliver Wendall Holmes', 'Oh, the things you can find, if you don\'t stay behind. - Dr. Seuss', 'Be so good they can\'t ignore you. - Steve Martin', 'Strive for greatness. - LeBron James', 'Do one thing every day that scares you. - Eleanor Roosevelt']

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quoteArray.length));
    document.getElementById('quote').innerHTML = quoteArray[randomNumber];
}