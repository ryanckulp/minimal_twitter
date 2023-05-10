var navItemsToIgnore = ['Bookmarks', 'Explore', 'Lists', 'More', 'Profile', 'Top Articles', 'Verified Orgs'];
// var miscItemsToIgnore = [
//   {selector: 'aside', label: 'Relevant people'}
// ]

var leftNav;

function minifyNavigation() {
  Array.from(leftNav.children).forEach(function(item) {
    if (navItemsToIgnore.includes(item.innerText)) {
      item.remove();
    }
  })
}

function minifySidebars() {
  console.log('minifying sidebars!');
  sidebarsToIgnore.forEach(function(bar) {
    let sidebars = document.querySelectorAll('nav[aria-label=' + '"' + bar + '"' + ']');
    if (sidebars.length > 0) {
      sidebars[0].remove();
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

var relevantPeopleExists = setInterval(function() {
  sidebars = document.querySelectorAll("aside[aria-label='Relevant people']");
  if (sidebars.length > 0) {
    clearInterval(relevantPeopleExists);
    sidebars[0].remove();
  }
}, 200);

var whatsHappeningExists = setInterval(function() {
  sidebars = document.querySelectorAll('div[aria-label="Timeline: Trending now"]');
  if (sidebars.length > 0) {
    clearInterval(whatsHappeningExists);
    sidebars[0].remove();
  }
}, 200);

var footerExists = setInterval(function() {
  sidebars = document.querySelectorAll('nav[aria-label="Footer"]');
  if (sidebars.length > 0) {
    clearInterval(footerExists);
    sidebars[0].remove();
  }
}, 200);
