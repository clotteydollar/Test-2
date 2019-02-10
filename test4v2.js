
// one

var listArray =["Yaw","Daniel","Richard","Alex","Richard","jack","Ted","Daniel","Gideon"]

let names=(value)=> value.filter((v,i)=> value.indexOf(v)===i)

console.log(names(listArray));

var numArray =[1,4,6,7,7,8,9,9,9,8]





function compareMe(a,b) {(a === b) ? console.log("True") : console.log("False")}

console.log(compareMe(6, "6"));

var array_items =[1,4,6,7,7,8,9,9,9,8]

 var all_the_same= array_items.map(function (elements) {
        elements = new Set()
        return elements.length < 1 || elements.has(elements[0])

    })

console.log(all_the_same)