
document.addEventListener("DOMContentLoaded", (event) => {
    const searchMsg = document.getElementById("searchMsg"),
        searchBar = document.getElementById("userInput"),
        searchBtn = document.getElementById("searchBtn");
    searchMsg.style.visibility = "hidden";

    const URLpattern = "";

    searchBar.addEventListener("input", (e) => {
        const urlBool = searchBar.value.match(URLpattern);
        if (urlBool || searchBar.value === "")
            return (searchMsg.style.visibility = "hidden");
        return (searchMsg.style.visibility = "visible");
    });

    searchBar.addEventListener("keypress", (e) => {
        if (e.keyCode !== 13) return;
        const urlBool = searchBar.value.match(URLpattern);

        if (urlBool) {
            chrome.runtime.sendMessage({ action: "newWindow", url: urlBool[2] });
        }
    });

    searchBtn.addEventListener("click", () => {
        chrome.storage.sync.get(["appActive"], function (data) {
            if (data["appActive"]) {
                chrome.storage.sync.set({appActive: false}, function () {
                    console.log("Information Stored");
                })
                chrome.browserAction.setBadgeText({ text: 'ON' });
            } else {
                chrome.storage.sync.set({appActive: true}, function () {
                    console.log("Information Stored");
                })
                chrome.browserAction.setBadgeText({ text: 'OFF' });
            }
        });
        /*console.log("PRESENT")
        const urlBool = searchBar.value.match(URLpattern);
        if (urlBool) {
            chrome.runtime.sendMessage({ action: "newWindow", url: urlBool[2] });
        }
        */
    });
});
