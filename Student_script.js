function showPage(pageName) {
    var i;
    var pages = document.getElementsByClassName("page");
    for (i = 0; i < pages.length; i++) {
      pages[i].style.display = "none";
    }
    document.getElementById(pageName).style.display = "block";
}

function saveOrder() {
    var checkboxes = document.getElementsByClassName('checkbox');
    var checkedBoxes = [];
  
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        checkedBoxes.push(checkboxes[i]);
      }
    }
    alert('Order saved');
}
