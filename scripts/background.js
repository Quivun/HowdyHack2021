// Called when the user clicks on the browser action.



chrome.storage.local.set({
  currentTimeFrame : "0:00",
  musicActive : true
});

// List with a json object
// Git looks like a set, input default values.
// the reason the git looks like a set is because when you have defaults it won't break anything.
//
chrome.browserAction.onClicked.addListener(function (tab) {
  // Send a message to the active tab
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { "message": "clicked_browser_action" });
  });
});
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === "open_new_tab") {
      chrome.tabs.create({ "url": request.url });
    }
  }
);
chrome.storage.local.get(["overlay-status"], function (data) {
  if (data["overlay-status"] === "on") {
    chrome.browserAction.setBadgeText({text: 'ON'});
  } else {
    chrome.browserAction.setBadgeText({text: 'OFF'});
  }
});

//https://stackoverflow.com/questions/10994324/chrome-extension-content-script-re-injection-after-upgrade-or-install
chrome.manifest = chrome.runtime.getManifest();
var injectIntoTab = function (tab) {
  // You could iterate through the content scripts here
  var scripts = chrome.manifest.content_scripts[0].js;
  var i = 0, s = scripts.length;
  for (; i < s; i++) {
    chrome.tabs.executeScript(tab.id, {
      file: scripts[i]
    });
  }
}

// Get all windows
chrome.windows.getAll({
  populate: true
}, function (windows) {
  var i = 0, w = windows.length, currentWindow;
  for (; i < w; i++) {
    currentWindow = windows[i];
    var j = 0, t = currentWindow.tabs.length, currentTab;
    for (; j < t; j++) {
      currentTab = currentWindow.tabs[j];
      // json object script | give it a file
      console.log("Running")
      chrome.tabs.executeScript(currentWindow.tabs[j],{code : "window.alert(1)"});
      // Skip chrome:// and https:// pages
      if (!currentTab.url.match(/(chrome|https):\/\//gi)) {
        injectIntoTab(currentTab);
      }
    }
  }
});