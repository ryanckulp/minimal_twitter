chrome.action.onClicked.addListener(function(tab) {
  chrome.tabs.create({"url": "https://github.com/ryanckulp/minimal_twitter"});
});
