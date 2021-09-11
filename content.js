alert("Hello from your Chrome extension!")
// var jData = window.readFromFile();

// var body = document.getElementById("body");
var numVals = 7;
var arrOfGPoints = new Array.apply(null, Array(5)).map(function () {});
var obj = {
    table: []
 };
obj.table.push({angle: "90deg"});
var json = JSON.stringify(obj);
var fs = require('fs');
fs.writeFile('gradient_attributes.json', json, 'utf8', callback);
for(i = 0;i<numVals;i++){

}
