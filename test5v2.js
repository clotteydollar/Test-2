//function to generate stars
var numbers=[1,2,3,4,5,6];
function star(numbers) {

    for(var i=0;i<numbers   ;i++) {
         var output="";
        for(var j=0;j<numbers-i;j++) {

            output +=" "
        }
        for(var k=0;k<=i;k++) {
        }
        output += "* ";
        console.log(output);
    }
}
star(numbers)

//function for alphabetical order
function apha(words) {
    // this split the words in to array and the sorts them
    //then joins all together
    return words.split('').sort().join('');
}

console.log(apha("alphame"));

//function to remove multiples of 5

var list =[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

//here there is a call back function that is passed to  the filter function
// to return the array that meets the condition
var  removemultiple= list.filter((value,index,arr)=> value % 5 !==0)

console.log(removemultiple);





function count(str1, str2){
    var string = str2.split(' ');
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if(string[i] === str1){
            count++;
        }

    }
    return count;
};


console.log(count( "am","ample time is amazingly available"));








function largeThree(numbers) {
    // since the sort functions takes a callback function i passed
    // one into it to convert the sorting into descending order
    var results= numbers.sort(function (a,b) {
        return a<b? 1:a==b?0:-1;
    })
    var maxvalues= results.slice(0,3)
    return maxvalues
}

console.log(largeThree([6, 7, 8, 9, 0,]));