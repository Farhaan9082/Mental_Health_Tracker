(function get_details() {
    list = JSON.parse(window.localStorage.getItem('list'));
    var lister = document.getElementById('lister')
    var div;
    list.forEach(element => {
        div = document.createElement('div');
        div.innerHTML = element['title'];
        lister.appendChild(div)
    });
})();