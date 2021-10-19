



function highlight_text () {
    let paragraphs = document.getElementsByTagName("p");
    let paragraph = [];
    for (elt of paragraphs) {
        paragraph.push(elt.innerText);
    }

    for (var i = 0; i < paragraphs.length; i++) {
        let p = quick_sentiment(paragraph[i]);

        // console.log(p);
        console.log(paragraph[i]);
        if(p === 'Positive') {
            paragraphs[i].style['background-color'] = '#ff00ff';
        } else if (p === 'Negative') {
            paragraphs[i].style['background-color'] = '#ff00ff';
        } else {
            paragraphs[i].style['background-color'] = '#ff00ff';
        }
    }


}