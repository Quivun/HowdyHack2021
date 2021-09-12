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
var numTimes = 0
var leftIncrement = -2
var rightIncrement = 2
setInterval(function(){updatePositions()}, 17)
// for(a = 0;a<14;a++){
//     updatePositions()
// }
function updatePositions(){
    //if(numTimes<20){
        for(i=1;i<object.table.length-1;i++){
            
            if(i<object.table.length/2){
                if(object.table[1].p>12 && object.table[1].p<32){
                    object.table[i].p = object.table[i].p + leftIncrement
                }
                else{
                    leftIncrement=leftIncrement*-1
                    object.table[i].p = object.table[i].p + leftIncrement
                }
            }
            else if(i>object.table.length/2){
                if(object.table[i].p>=78 && object.table[i].p<=100){
                    object.table[i].p = object.table[i].p + rightIncrement
                }
                else{
                    rightIncrement= rightIncrement*-1
                    object.table[i].p = object.table[i].p + rightIncrement
                }
            }
        }
        console.log(object.table)
        setElements(object.table)
    //}
    //numTimes++
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
    body.style = styleText
    return;
}
