//function to generate stars

function star(number) {
    //this loops over to get mutiple of stars
    var repeatme= "*"
    for (i=1;i<number;i++) {
        for (j=0;j<i;j++) {
            
           console.log("*")
       }
        console.log("")
    }
}

star(5)

//function for alphabetical order
function apha(words) {
    // this split the words in to array and the sorts them
    //then joins all together
    return words.split('').sort().join('');
}

console.log("aphalme");

//function to remove multiples of 5

var list =[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

//here there is a call back function that is passed to  the filter function
// to return the array that meets the condition
var  removemultiple= list.filter(function (value,index,arr) {
    return value % 5 !==0;

})

console.log(removemultiple);




function howmanytimes(str1,str2) {
    // the second string is splited into arrays to target them individually
    var words =str2.split(" ")
    // a for loop is done to get words individually in order to compare the two
    for (var i=0;i<words.length;i++){

        if (str1===words[i]){
            console.log(str1)
        }
    }

}

console.log(howmanytimes("am", "i am a boy"));


function largeThree(numbers) {
    // since the sort functions takes a callback function i passed
    // one into it to convert the sorting into descending order
   var results= numbers.sort(function (a,b) {
       if (a<b){
           return 1;
       }else if (a==b){
           return 0;
       } else {
           return -1;
       }


   })
   var maxvalues= results.slice(0,3)
    return maxvalues
}

console.log(largeThree([6, 7, 8, 9, 0,]));