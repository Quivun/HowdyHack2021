// Called when the user clicks on the browser action.


chrome.storage.sync.set({
  curMusic: "yt_link",
  curFrame: "0:00",
  appActive: false,
  musicActive: false
}, function () {
  console.log("Information Stored");
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
chrome.storage.sync.get(["appActive"], function (data) {
  if (data["appActive"]) {
    chrome.storage.sync.set({ appActive: false }, function () {
      console.log("Information Stored");
    })
    chrome.browserAction.setBadgeText({ text: 'ON' });

  } else {
    chrome.storage.sync.set({ appActive: true }, function () {
      console.log("Information Stored");
    })
    chrome.browserAction.setBadgeText({ text: 'OFF' });
  }
});

//https://stackoverflow.com/questions/10994324/chrome-extension-content-script-re-injection-after-upgrade-or-install
