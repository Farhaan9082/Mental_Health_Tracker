(function get_details() {
    list = JSON.parse(window.localStorage.getItem('list'));
    var lister = document.getElementById('lister')
    var h2 = document.createElement('h2');
    h2.innerHTML = list[0]
    lister.appendChild(h2)
    list.shift()
    var div;
    list.forEach(element => {
        div = document.createElement('div');
        div.innerHTML = element['title'];
        lister.appendChild(div)
    });
    localStorage.removeItem('list');
})();