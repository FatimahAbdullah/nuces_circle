var listElm = document.querySelector('#infinite-list');

// Add 20 items.
var nextItem = 1;
var loadMore = function() {
  for (var i = 0; i < 200; i++) {
    var item = document.createElement('li');
    item.innerText = 'Item ' + nextItem++;
    listElm.appendChild(item);
  }
}

// Detect when scrolled to bottom.
listElm.addEventListener('scroll', function() {
  if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
    loadMore();
  }
});
function search(){
  window.location = "results.html";
}

// Initially load some items.
loadMore();