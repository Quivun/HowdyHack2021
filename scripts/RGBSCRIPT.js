//import music_data from "C:\Users\ritzr\Desktop\cs_projects\selfdrive car\music_data.json"

var body = document.getElementById("body");
var numVals = 7;
var arrOfGPoints = Array.apply(null, Array(5)).map(function () { });



var object = {
    "country": [
        { 'r': 180, 'g': 108, 'b': 58, 'a': 1, 'p': 0 },
        { 'r': 120, 'g': 0, 'b': 0, 'a': 1, 'p': 50 },
        { 'r': 252, 'g': 176, 'b': 69, 'a': 1, 'p': 100 }
    ],
    "pop": [
        { "r": 226, "g": 98, "b": 220, "a": 68, "p": 22 },
        { "r": 253, "g": 29, "b": 248, "a": 100, "p": 80 }
    ],
    "rock": [
        {
            "r": 255,
            "g": 50,
            "b": 50,
            "a": 90,
            "p": 16
        },
        { "r": 255, "g": 255, "b": 255, "a": 100, "p": 50 },
        { "r": 22, "g": 96, "b": 255, "a": 100, "p": 100 }
    ],
    "hip-hop": [
        { "r": 15, "g": 26, "b": 74, "a": 100, "p": 0 },
        { "r": 170, "g": 147, "b": 147, "a": 100, "p": 39 },
        { "r": 255, "g": 27, "b": 0, "a": 100, "p": 53 }
    ],
    "edm": [
        {
            "r": 71,
            "g": 210,
            "b": 0,
            "a": 90,
            "p": 0
        },
        { "r": 15, "g": 74, "b": 16, "a": 100, "p": 0 },
        { "r": 186, "g": 255, "b": 0, "a": 100, "p": 90 }
    ],
    "classical": [
        { "r": 246, "g": 188, "b": 105, "a": 100, "p": 6 },
        { "r": 3, "g": 5, "b": 232, "a": 100, "p": 19 },
        { "r": 102, "g": 216, "b": 213, "a": 100, "p": 40 },
        { "r": 224, "g": 241, "b": 241, "a": 100, "p": 62 },
        { "r": 164, "g": 220, "b": 100, "a": 100, "p": 72 },
        { "r": 252, "g": 176, "b": 69, "a": 100, "p": 97 },
    ]
};
//  var point = {
//     "r":2,
//     "g":0,
//     "b":36,
//     "a":1,
//     "p":0
// }
// object.table.push(point)

// var point = {
//     "r":4,
//     "g":117,
//     "b":192,
//     "a":1,
//     "p":22
// }
// object.table.push(point)

// var point = {
//     "r":8,
//     "g":39,
//     "b":141,
//     "a":0,
//     "p":37
// }
// object.table.push(point)

// var point = {
//     "r":2,
//     "g":0,
//     "b":36,
//     "a":0,
//     "p":49
// }
// object.table.push(point)

// var point = {
//     "r":2,
//     "g":0,
//     "b":36,
//     "a":0,
//     "p":60
// }
// object.table.push(point)

// var point = {
//     "r":4,
//     "g":117,
//     "b":192,
//     "a":1,
//     "p":78
// }
// object.table.push(point)

// var point = {
//     "r":2,
//     "g":0,
//     "b":36,
//     "a":1,
//     "p":100
// }

// object.table.push(point)

// readTextFile("C:\Users\ritzr\Desktop\cs_projects\selfdrive car\music_data.json", function(text){
//     var data = JSON.parse(text);
// });
// console.log((musicData['pulse'])[5])

// const pulse = musicData.pulse
// var prevPulse = 0
// var pulseParser = 0

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


var increment = 3
var currGenre = "country"
var currVals = object[currGenre]
console.log(currVals)
searchBar = document.getElementById("userInput")

searchBar.addEventListener("keypress", (e) => {

    if (e.keyCode !== 13) return;
    var rand = getRandomInt(5)
    var arr = ['country', 'rock', 'pop', 'hip-hop', 'edm', 'classical']
    currGenre = arr[rand]
    currVals = object[currGenre]
    return
})

setInterval(function () { updatePositions() }, 58.05)

function updatePositions() {
    // var currPulse = pulse[pulseParser]
    // var brightener = currPulse/100
    for (i = 0; i < currVals.length; i++) {
        currAttributes = currVals[i]
        currPos = currAttributes.p
        if (currPos + increment > 100) {
            currVals[i].p = 0
        }
        else
            currVals[i].p += increment
        // if(currPulse!=0){
        //     currVals[i].r+=brightener
        //     currVals[i].g+=brightener
        //     currVals[i].b+=brightener
        // }
        // else if(currPulse==0 && prevPulse!=0){
        //     currVals[i].r-=brightener
        //     currVals[i].g-=brightener
        //     currVals[i].b-=brightener
        //     brightener=0
        // }
        // prevPulse = currPulse
        // pulseParser++
    }
    console.log(currVals)
    setElements(currVals)
    return;
}

function setElements(currVals) {
    var styleText = "background:linear-gradient(90deg,"
    for (i = 0; i < currVals.length; i++) {
        var currAttributes = currVals[i]
        var toAdd = " rgba(" + (currAttributes.r).toString() + "," + (currAttributes.g).toString() + "," +
            (currAttributes.b).toString() + "," + (currAttributes.a).toString() + ") " +
            (currAttributes.p).toString() + "%,"
        styleText += toAdd
    }
    styleText = styleText.replace(/.$/, ")")
    console.log(styleText)
    document.getElementById("top").style = styleText
    document.getElementById("bottom").style = styleText
    styleText = "background:linear-gradient(180deg,"
    for (i = 0; i < currVals.length; i++) {
        var currAttributes = currVals[i]
        var toAdd = " rgba(" + (currAttributes.r).toString() + "," + (currAttributes.g).toString() + "," +
            (currAttributes.b).toString() + "," + (currAttributes.a).toString() + ") " +
            (currAttributes.p).toString() + "%,"
        styleText += toAdd
    }
    styleText = styleText.replace(/.$/, ")")
    console.log(styleText)
    document.getElementById("left").style = styleText
    document.getElementById("right").style = styleText
    console.log(document.getElementById("right").background)
    return;
}
