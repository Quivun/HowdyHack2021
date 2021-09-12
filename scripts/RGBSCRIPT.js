//import music_data from "C:\Users\ritzr\Desktop\cs_projects\selfdrive car\music_data.json"

var body = document.getElementById("body");
var numVals = 7;
var arrOfGPoints = Array.apply(null, Array(5)).map(function () {});



var object = {
    "country": {
        "r":121,
        "g":44,
        "b":9,
        "a":68,
        "p":0
    },
    "pop" : {
        "r":226,
        "g": 98,
        "b": 220,
        "a": 68,
        "P": 22
    },
    "rock": {
        "r":255,
        "g":50,
        "b":50,
        "a":90,
        "p":37
    },
    "hip-hop": {
        "r":29,
        "g":24,
        "b":103,
        "a":90,
        "p":49
    },
    "edm" : {
        "r":71,
        "g":210,
        "b":0,
        "a":90,
        "p":60
    },
    "classical" : {
        "r":0,
        "g":152,
        "b":179,
        "a":90,
        "p":78
    }
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
var increment = 3
var currGenre = "pop"
var currVals = object[currGenre]
console.log(currVals)
setInterval(function(){updatePositions()}, 58.05)

function updatePositions(){
    // var currPulse = pulse[pulseParser]
    // var brightener = currPulse/100
    for(i = 0;i<currVals.length;i++){
        currAttributes = currVals[i]
        currPos = currAttributes.p
        if(currPos+increment>100){
            currVals[i].p=0
        }
        else
            currVals[i].p+=increment
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

function setElements(currVals){
    var styleText  = "background:linear-gradient(90deg,"
    for(i = 0;i<currVals.length;i++){
        var currAttributes = currVals[i]
        var toAdd = " rgba(" + (currAttributes.r).toString() + "," + (currAttributes.g).toString() + "," +
        (currAttributes.b).toString() + "," + (currAttributes.a).toString() + ") " +
        (currAttributes.p).toString() + "%,"
        styleText+=toAdd
    }
    styleText = styleText.replace(/.$/,")")
    console.log(styleText)
    document.getElementById("top").style=styleText
    document.getElementById("bottom").style=styleText
    styleText  = "background:linear-gradient(180deg,"
    for(i = 0;i<currVals.length;i++){
        var currAttributes = currVals[i]
        var toAdd = " rgba(" + (currAttributes.r).toString() + "," + (currAttributes.g).toString() + "," +
        (currAttributes.b).toString() + "," + (currAttributes.a).toString() + ") " +
        (currAttributes.p).toString() + "%,"
        styleText+=toAdd
    }
    styleText = styleText.replace(/.$/,")")
    console.log(styleText)
    document.getElementById("left").style=styleText
    document.getElementById("right").style=styleText
    console.log(document.getElementById("right").background)
    return;
}
