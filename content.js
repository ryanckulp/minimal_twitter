var navItemsToIgnore = ['Bookmarks', 'Explore', 'Lists', 'More', 'Profile', 'Top Articles', 'Verified Orgs'];
var leftNav;

var miscItemsToHide = [
  {selector: 'aside', labels: ['Relevant people', 'Who to follow']},
  {selector: 'div', labels: ['Timeline: Trending now']},
  {selector: 'nav', labels: ['Footer']}
]

function minifyNavigation() {
  Array.from(leftNav.children).forEach(function(item) {
    if (navItemsToIgnore.includes(item.innerText)) {
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

miscItemsToHide.forEach(function(miscItem) {
  var interval = setInterval(function() {
    miscItem.labels.forEach(function(label) {
      items = document.querySelectorAll(`${miscItem.selector}[aria-label="${label}"]`)
      if (items.length > 0) {
        items[0].remove();
        clearInterval(interval);
      }
    })
  }, 200);
})