let input =process.argv.slice(2);
var fs = require('fs');
const bigLineBreaks = require('./commands/bigLineBreaks');
const defaultShowData = require('./commands/defaultShowData');
const giveNumbers = require('./commands/giveNumbers');
const nonEmptyNumber = require('./commands/nonEmptyNumber');
let val =0;
let options = input[0];
 let displayContent = require('./commands/displayContent');
 if(options == '-s' || options =='-n' || options == '-b'){
     let dirpath = input[1];
     if(input.length <= 2){
         switch(options){
             case '-s' :
                 bigLineBreaks(dirpath);
                 break;

             case '-n':
                 giveNumbers(dirpath);
                 break;
                 
             case '-b' :
                 nonEmptyNumber(dirpath);
                 break;
                 
             default:
                 console.log(' please enter a valid option');
                 break;    
         }
     }else{
         if(input.length == 3 && input[0] == '-n' && input[1] == '-s'){
              let path = input[2];
              bigLineBreaks(path);
              giveNumbers(path);
         }else if(input.length == 3 && input[0] == '-n' && input[1] == '-b'){
             let path = input[2];
             giveNumbers(path)
         }
         else if(input.length == 3 && input[0] == '-b' &&  input[1] =='-n'){
             let path = input[2];
             nonEmptyNumber(path)
         }else{
             console.log('Enter any valid option');
         }
     }
    }
        else{
         defaultShowData(input);
        }
          
 