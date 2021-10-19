

function highlight_text () {
    var paragraph = document.getElementsByTagName("p");
    var j = paragraph.length;
    
    for (let i = 0; i < j; i++) {
        var p = quick_sentiment(paragraph[i]);
        console.log(p);
        if(p == 'Positive') {
            let regExp = new RegExp(paragraph[i], 'gi');
            paragraph[i].textContent = (paragraph[i].textContent).replace(regExp, "<mark>$&</mark>");
        } else if (p == 'Negative') {
            let regExp = new RegExp(paragraph[i], 'gi');
            paragraph[i].textContent = (paragraph[i].textContent).replace(regExp, "<mark>$&</mark>");
        } else {
            let regExp = new RegExp(paragraph[i], 'gi');
            paragraph[i].textContent = (paragraph[i].textContent).replace(regExp, "<mark>$&</mark>");
        }
    }
}

