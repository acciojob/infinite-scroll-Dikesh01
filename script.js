

    window.addEventListener('DOMContentLoaded', function() {
      var list = document.getElementById('infi-list');
      var itemsToAdd = 2;

      function addListItems() {
        for (var i = 1; i <= itemsToAdd; i++) {
          var listItem = document.createElement('li');
          listItem.textContent = 'List item ' + (list.childElementCount + i);
          list.appendChild(listItem);
        }
      }

      function checkScroll() {
        var lastItem = list.lastElementChild;
        var lastItemOffset = lastItem.offsetTop + lastItem.offsetHeight;
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var windowHeight = window.innerHeight;

        if (scrollTop + windowHeight >= lastItemOffset) {
          addListItems();
        }
      }

      window.addEventListener('scroll', checkScroll);
    });

