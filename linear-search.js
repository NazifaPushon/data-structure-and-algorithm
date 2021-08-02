let arr = [23,45,66,21,8,9,5];
// linear search algorithm

function linearSearch(val,arr){
    for(let i =0;i < arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;
}

let result = linearSearch(5,arr);
console.log(result);