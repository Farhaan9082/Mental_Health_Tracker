/*
 *  Author: Saud Kadiri @ Group 5
 *
 *  Changelog:
 *   Date           Version     Changed by      Change Description
 *   2021-09-17     1.0         Saud Kadiri     Created the file for modularity purpose
 *
 *
 *  Source: https://stackoverflow.com/questions/13591983/onclick-or-inline-script-isnt-working-in-extension
 */

// As extensions are required to have event listners.

//global variable
var myChart;

document.addEventListener('DOMContentLoaded', () => {

    //to stop page reload after submitting the form
    var form = document.getElementById("form");
    function handleForm(event) { event.preventDefault(); }
    form.addEventListener('submit', handleForm);

    // in case if the user clicks "Submit" button
    const submit = document.getElementById('submit');
    submit.addEventListener('click', get_history);
    // get_history() -> calculate_sentiments() -> plot_chart()

    // in case if the user clicks "Analyze" button
    const analyze = document.getElementById('analyze');
    analyze.addEventListener('click', replace_text);

    // in case if the user clicks "QnA" button
    const qna = document.getElementById('qna');
    qna.addEventListener('click', () => {
        chrome.tabs.create( {url: "../QnA.html"})
    })

    // in case if the user clicks "QnA" button
    const video = document.getElementById('video');
    video.addEventListener('click', () => {
        chrome.tabs.create({ url: "https://www.youtube.com/results?search_query=inspiration" })
    })
});
