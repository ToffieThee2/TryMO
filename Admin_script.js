const listItems = document.querySelectorAll('li');

listItems.forEach(item => {
  item.addEventListener('click', () => {
    listItems.forEach(li => li.classList.remove('active'));
    item.classList.add('active');
  });
});

function showPage(pageName) {
  var i;
  var pages = document.getElementsByClassName("page");
  for (i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
  }
  document.getElementById(pageName).style.display = "block";
}

function toggleDivs() {
  var table_id = document.getElementById("table_id");
  var ProductManage = document.getElementById("ProductManage");

  if (table_id.style.display === "none") {
    table_id.style.display = "block";
    ProductManage.style.display = "none";
  } else {
    table_id.style.display = "none";
    ProductManage.style.display = "block";
  }
}