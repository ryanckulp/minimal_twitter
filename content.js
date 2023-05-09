var itemsToIgnore = ['Bookmarks', 'Explore', 'Lists', 'More', 'Profile', 'Top Articles', 'Verified Orgs'];
var leftNav;

function minifyNavigation() {
  Array.from(leftNav.children).forEach(function(item) {
    if (itemsToIgnore.includes(item.innerText)) {
      item.remove();
    }
  })
}

var leftNavExists = setInterval(function() {
  navs = document.querySelectorAll("nav[aria-label='Primary']")
  if (navs.length > 0) {
    leftNav = navs[0];
    clearInterval(leftNavExists);
    minifyNavigation();
  }
}, 200);
