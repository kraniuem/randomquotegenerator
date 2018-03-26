const myQuotes = [{
    quote: "Don’t forget your own self while preaching to others.",
    name: "Umar ibn al-Khattab (RA)"
},{
    quote: "Patience is a pillar of Faith.",
    name: "Umar ibn al-Khattab (RA)"
},{
    quote: "Be the change that you wish to see in the world.",
    name: "Mahatma Gandhi"
},{
    quote: "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    name: "Anne Frank"
},{
    quote: "Never doubt that a small group of thoughtful, committed, citizens can change the world. Indeed, it is the only thing that ever has.",
    name: "Margaret Mead"
},{
    quote: "You talk when you cease to be at peace with your thoughts.",
    name: "Kahil Gibran"
},{
    quote: "Wise men speak because they have something to say; fools because they have to say something.",
    name: "Plato"
},{
    quote: "One's philosophy is not best expressed in words; it is expressed in the choices one makes... and the choices we make are ultimately our responsibility.",
    name: "Eleanor Roosevelt"
},{
    quote: "Do not take life too seriously. You will never get out of it alive.",
    name: "Elbert Hubbard"
},{
    quote: "Behind every great man is a woman rolling her eyes.",
    name: "Jim Carrey"
},{
    quote: "My fake plants died because I did not pretend to water them.",
    name: "Mitch Hedberg"
},{
    quote: "People who think they know everything are a great annoyance to those of us who do.",
    name: "Isaac Asimov"
},{
    quote: "Get your facts first, then you can distort them as you please.",
    name: "Mark Twain"
},{
    quote: "I'm sorry, if you were right, I'd agree with you.",
    name: "Robin Williams"
},{
    quote: "A woman's mind is cleaner than a man's; She changes it more often.",
    name: "Oliver Herford"
},{
    quote: "Laugh and the world laughs with you. Snore and you sleep alone.",
    name: "Anthony Burgess"
},{
    quote: "Everything is funny, as long as it's happening to somebody else.",
    name: "Will Rogers"
},
];

const randomize = () => {
    let mathFloor = Math.floor(Math.random()*myQuotes.length);
    let displayQuote = myQuotes[mathFloor].quote;
    let displayName = myQuotes[mathFloor].name;
    let name =  document.getElementById("name");
    let quote = document.getElementById("quote");
    quote.innerHTML = displayQuote;
    name.innerHTML = displayName;
}

document.getElementById("button").addEventListener("click", randomize);

