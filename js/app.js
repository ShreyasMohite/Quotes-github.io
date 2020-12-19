import * as moti from "./quotes.js";



const but = document.getElementById("but");
window.onload = () => {
    but.addEventListener("click", () => {
        let quote = document.getElementById("quotes");
        let author = document.getElementById("author");
        let index = parseInt(Math.random() * 48);
        //console.log(index);

        let get_quotes = moti.motivation[index].quote;
        let get_author = moti.motivation[index].author;
        quote.innerHTML = get_quotes;
        author.innerHTML = "---" + get_author;


    });

}



//let index = parseInt(Math.random * 48);