//npm init -y
//npm install request cheerio
let request = require("request");
console.log("Before");
request("https://www.google.com",cb);
function cb(error, response, html){
    if(error){
        console.log(error);
    }else{
        extractionHtml(html)
    }
}
function extractionHtml(html){
    let selectorTool = cheerio.load(html);
    let selectElem = selectorTool("#SIvCob");
    console.log(selection.text());
    console.log(selectElem.html)
}