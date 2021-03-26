let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard"

let request = require("request");
let cheerio = require("cheerio");
console.log("Before");
request(url,cb);
function cb(error, response, html){
    if(error){
        console.log(error);
    }else{
       // console.log(html);
        extractionHtml(html)
    }
}
function extractionHtml(html){
    let selectorTool = cheerio.load(html);
    let bowlerstable = selectorTool(".table.bowler");
    let stringhtml = "";
   
    for(let i=0; i<bowlerstable.length;i++){
        stringhtml += selectorTool(bowlerstable[i].html);
    }
    console.log(stringhtml);
}