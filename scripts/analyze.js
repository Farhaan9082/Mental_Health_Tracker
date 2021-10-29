/**
 * Called from popop.js this page_analysis() gets called.
 */
(function page_analysis() {
    let paragraphs = document.getElementsByTagName("p");
    highlight_text(paragraphs);
    let list = document.getElementsByTagName("li");
    highlight_text(list);
    let span = document.getElementsByTagName("span");
    highlight_text(span);
    let h1 = document.getElementsByTagName("h1");
    highlight_text(h1);
})();

/**
 * Highlights the text within the passed tag.
 * @param {HTMLCollectionOf<HTMLElement>} tag
 */
function highlight_text(tags) {
    for (const tag of tags) {
        let text = tag.innerHTML
        color = get_color(text)
        tag.style['background-color'] = color;
    }
}

/**
 * Calls the quick_sentiment() function and returns the color based on the outcome
 * @param {string} text
 */
function get_color(text) {
    let colors = { 
        "Neutral": "#FFD604",   // Yellow
        "Positive": "#B4E001",  // Green
        "Negative": "#CE3536"   // Red
    };
    let type = quick_sentiment(text)
    return colors[type];
}