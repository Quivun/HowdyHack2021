// In popup.html 

// dont forget to use an external script file


document.addEventListener("DOMContentLoaded", (event) => {
    const searchMsg = document.getElementById("searchMsg"),
        searchBar = document.getElementById("userInput"),
        switcherSlide = document.getElementById('switcher'),
        playButton = document.getElementById("playButton");
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
        hostIP = 'http://127.0.0.1:5000/'
        var titleStr = hostIP + searchBar.value
        fetch(titleStr)
            .then(res => res.json())
            .then(res => document.getElementById("videoplayer").setAttribute("src","https://www.youtube.com/embed/" + res[searchBar.value].substring(32,) + "?autoplay=1"))
        
        return
    })
    switcherSlide.addEventListener("click", () => {
        chrome.storage.sync.get(["appActive"], function (data) {
            if (data["appActive"]) {
                chrome.storage.sync.set({ appActive: false }, function () {
                    console.log("Turned On!");
                })
                chrome.browserAction.setBadgeText({ text: 'ON' });
            } else {
                chrome.storage.sync.set({ appActive: true }, function () {
                    console.log("Turned Off!");
                })
                chrome.browserAction.setBadgeText({ text: 'OFF' });
            }
        });
    });
    playButton.addEventListener("click", () => {
        console.log("PRESENT")
        chrome.extension.sendMessage({ action: "play" })


    });
});
