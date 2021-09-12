//import music_data from "C:\Users\ritzr\Desktop\cs_projects\selfdrive car\music_data.json"

var body = document.getElementById("body");
var numVals = 7;
var arrOfGPoints = Array.apply(null, Array(5)).map(function () {});



var object = {
    angle: "90deg",
    table: []
 };
 var point = {
    "r":2,
    "g":0,
    "b":36,
    "a":1,
    "p":0
}
object.table.push(point)

var point = {
    "r":4,
    "g":117,
    "b":192,
    "a":1,
    "p":22
}
object.table.push(point)

var point = {
    "r":8,
    "g":39,
    "b":141,
    "a":0,
    "p":37
}
object.table.push(point)

var point = {
    "r":2,
    "g":0,
    "b":36,
    "a":0,
    "p":49
}
object.table.push(point)

var point = {
    "r":2,
    "g":0,
    "b":36,
    "a":0,
    "p":60
}
object.table.push(point)

var point = {
    "r":4,
    "g":117,
    "b":192,
    "a":1,
    "p":78
}
object.table.push(point)

var point = {
    "r":2,
    "g":0,
    "b":36,
    "a":1,
    "p":100
}

object.table.push(point)

// readTextFile("C:\Users\ritzr\Desktop\cs_projects\selfdrive car\music_data.json", function(text){
//     var data = JSON.parse(text);
// });
// console.log((musicData['pulse'])[5])

// const pulse = musicData.pulse
// var prevPulse = 0
// var pulseParser = 0
var increment = 3

setInterval(function(){updatePositions()}, 58.05)

function updatePositions(){
    // var currPulse = pulse[pulseParser]
    // var brightener = currPulse/100
    for(i = 0;i<object.table.length;i++){
        currAttributes = object.table[i]
        currPos = currAttributes.p
        if(currPos+increment>100){
            object.table[i].p=0
        }
        else
            object.table[i].p+=increment
        // if(currPulse!=0){
        //     object.table[i].r+=brightener
        //     object.table[i].g+=brightener
        //     object.table[i].b+=brightener
        // }
        // else if(currPulse==0 && prevPulse!=0){
        //     object.table[i].r-=brightener
        //     object.table[i].g-=brightener
        //     object.table[i].b-=brightener
        //     brightener=0
        // }
        // prevPulse = currPulse
        // pulseParser++
    }
    console.log(object.table)
    setElements(object.table)
    return;
}

function setElements(table){
    var styleText  = "background:linear-gradient(90deg,"
    for(i = 0;i<table.length;i++){
        var currAttributes = table[i]
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
    for(i = 0;i<table.length;i++){
        var currAttributes = table[i]
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
