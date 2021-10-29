/**
 * Called from chart.js this get_details() gets called.
 */

(function get_details() {
    let list = JSON.parse(window.localStorage.getItem('list'));
    var lister = document.getElementById('lister')
    var h2 = document.createElement('h2');
    // the first element in the list is the result of the analysis.
    h2.innerHTML = list[0]
    lister.appendChild(h2)
    // remove the type from the list
    list.shift()
    var div;
    list.forEach(element => {
        div = document.createElement('div');
        div.innerHTML = element['title'];
        lister.appendChild(div)
    });
    // remove the list from local storage
    localStorage.removeItem('list');
})();