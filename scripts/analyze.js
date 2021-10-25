(function page_analysis() {
    let paragraphs = document.getElementsByTagName("p");
    highlight_text(paragraphs);
})();

function highlight_text(paragraphs) {
    for (const paragraph of paragraphs) {
        console.log(paragraph)
        color = get_color(paragraph)
        paragraph.style['background-color'] = color;
    }
}

function get_color(paragraph) {
    let colors = { 
        "Neutral": "#FFFF00",   // Yellow
        "Positive": "#00FF00",  // Green
        "Negative": "#FF0000"   // Red
    };
    let type = testType() // quick_sentiment(paragraph)
    return colors[type];
}

// Only for testing purpose
function testType() {
    let min = 0, max = 2
    let types = ["Neutral", "Positive", "Negative"];
    let i = Math.floor(Math.random() * (max - min + 1)) + min;
    return types[i];
}