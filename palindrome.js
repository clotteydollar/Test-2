function isPalindrom(text) {
    var textReversed = text.toLowerCase().split("").reverse("").join("")
    return text === textReversed;
}


console.log(isPalindrom("madam"));


var isPalindrome = function (text) {
    var textlength = text.length;
    if (textlength===0|| textlength===1){
        return true;
    }
    if(text[0]===text[textlength-1]){
        return isPalindrom(text.slice(1,textlength-1))
    }
    return false;
}

console.log(isPalindrom("madam"));

const today =new Date()
const day = today.getDay()
const daylist =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    console.log( `Today is:${daylist[day]}`)
let hour =today.getHours()
const minute =today.getMinutes()
const seconds =today.getSeconds()
let timezone = (hour>=12)? "PM":"AM";
hour =(hour>=12)? hour-12: hour;
if (hour==0 && seconds ===0){
    hour=12;
    timezone='Noon';
}
else
{
    hour =12;
    timezone ='PM';
}
if (hour===0 && timezone===' AM ')
{
    if (minute===0 && seconds===0)
    {
        hour=12;
        prepand=' Midnight';
    }
    else
    {
        hour=12;
        prepand=' AM';
    }
}
console.log(`Current Time : ${hour}${timezone} : ${minute} : ${seconds}`);
