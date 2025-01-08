const defaultQuotes = [
    {quote: "Stay Hungry, Stay Foolish", author: "Steve Jobs"},
    {quote: "The only way to do great work is to love what you do", author: "Steve Jobs"},
    {quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein"},
    {quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill"},
    {quote: "Do not wait to strike till the iron is hot; but make it hot by striking.William Butler Yeats", author: "William Butler Yeats"},
    {quote: "The best way to predict the future is to invent it.", author: "Alan Kay"},
    {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela"},
    {quote: "Opportunities don't happen. You create them.", author: "Chris Grosser"},
    {quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Thomas Jefferson"},
    {quote: "Do one thing every day that scares you.", author: "Eleanor Roosevelt"}
]

var random_quote = document.querySelector(".random-quote-generate");
var quote_author = document.querySelector(".random-quote-author");


function loadQuotes()
{
    let quotes = localStorage.getItem("quotes");
    if(quotes)
    {
        return JSON.parse(quotes);
    }
    else
    {
        localStorage.setItem("quotes", JSON.stringify(defaultQuotes));
        return defaultQuotes;
    }
}
loadQuotes()
displayRandomQuote()
function displayRandomQuote()
{
    var quotes = loadQuotes();
    var random_number = Math.floor(Math.random()*quotes.length);
    random_quote.textContent = '"'+quotes[random_number].quote+'"';
    quote_author.textContent = "- "+quotes[random_number].author;

    console.log(quotes);    
}

function saveQuotes(quotes) {
    localStorage.setItem("quotes", JSON.stringify(quotes));
  }

function addNewQuote()
{
    var new_quote = document.getElementById("newQuote").value;
    var new_author = document.getElementById("authorName").value;

    if(new_quote ==="" || new_author==="")
    {
        alert("Please Enter Quote and Author");
    }
    else
    {
        var quotes = loadQuotes();
        quotes.push({quote:new_quote, author: new_author});
        localStorage.setItem("quotes",JSON.stringify(quotes));
        alert("Quote Saved");
        new_quote.textContent = " ";
        new_author.textContent = " ";
    }
   
}



function displayAllQuotes() {
    var quote_container = document.querySelector(".quote-container");
    var author_container = document.querySelector(".author-container");
    var quotes = loadQuotes();

  
    if (quote_container && author_container) 
    {
        quotes.forEach(function (quoteObj) 
        {
            var paragraph_element_quote = document.createElement("p");
            var paragraph_element_author = document.createElement("p");
            paragraph_element_quote.textContent = `"${quoteObj.quote}"`;
            paragraph_element_author.textContent = `- ${quoteObj.author}`;
            quote_container.appendChild(paragraph_element_quote);
            author_container.appendChild(paragraph_element_author);
        });
    } 
    else 
    {
        console.error("Quote container elements are not found!");
    }
}

// Run the displayAllQuotes function when the page loads
if (window.location.href.includes("allQuote.html")) {
    window.addEventListener("DOMContentLoaded", displayAllQuotes);
}