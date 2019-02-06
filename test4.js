var listArray =["Yaw","Daniel","Richard","Alex","Richard","jack","Ted","Daniel","Gideon"]
var uniquesArray =[]
var count =0
var found = false;


for (i=0;i< listArray.length;i++){
    for (y=0;y<uniquesArray.length;y++){
        if (listArray[i]==uniquesArray[y]){
            found=true;
        }
    }
    count ++;
    if (count==1 && found==false){
        uniquesArray.push(listArray[i])
    }
    count=0;
    found=false;

}

console.log(listArray);
console.log(uniquesArray);




function compareMe(a,b) {
    if (a===b){
        return true;
    }else
        return false;

}

console.log(compareMe(6, "6"));


function sameValue([i]) {

    for(var i = 1; i < this.length; i++)
    {
        if(this[i] !== this[0])
            return false;
    }

    return true;
}
a=[2,4,5,5]

console.log(sameValue(a));