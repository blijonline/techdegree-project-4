function imageSearch() {

    var input = document.getElementById('searchbar');
    var filter = input.value.toUpperCase();
    var ul = document.getElementById("imagelist");
    var li = ul.getElementsByTagName('li');
    var a;
    var i;

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}