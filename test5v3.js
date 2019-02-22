//function to generate stars
var numbers=[1,2,3,4,5,6];
function star(numbers) {
    var output =" "
    for (i=0;i<numbers.length; i++){

        output="*".repeat(numbers[i])
         console.log(output)

    }
    return ""
}

console.log(star(numbers));



//still having issues with this code

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
