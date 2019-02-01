function showReversed(text) {
    return text.split("").reverse().join("");

}

console.log(showReversed("hello"));

function recurReversed(text) {
    if (text ===null){
        return null;
    }
    if (text.length <=1){
        return text
    }
    var first = text[0]
    var last = text[text.length-1]
    var newtext =recurReversed(text.substring(1,text.length-1));
    return last +newtext +first;
}

console.log(recurReversed("ghhahahahahha"));

//christmass

var today=new Date()
var  xmas = new Date(today.getFullYear(),11,25)

if (today.getMonth()==11 && today.getDate()>25){
    xmas.setFullYear(xmas.getFullYear()+1);

}
var oneMinute = 60 * 1000
var oneHour = oneMinute * 60
var oneDay = oneHour * 24

console.log(Math.ceil((xmas.getTime()-today.getTime())/(oneDay))+ "days left for christmas")