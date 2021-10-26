// const plot_chart = require("./piechart");

(function page_analysis() {
    let paragraphs = document.getElementsByTagName("p");
    highlight_text(paragraphs);
})();

function highlight_text(paragraphs) {
    for (const paragraph of paragraphs) {
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
    let type = quick_sentiment(paragraph)
    return colors[type];
}