let arr = [23,45,66,21,8,9,5]
// binary search 
function binary(arr,val){
    let upper = arr.length -1;
    let lower = 0;
    while(lower <= upper) {
        let mid= Math.floor((upper + lower) / 2);
        if(val === arr[mid]){
            return mid;
        }else if(val < arr[mid]) {
            upper = mid -1;
        }else{
            lower = mid + 1;
        }
    }
    return -1;
}
let sorted = arr.sort((a,b) => a-b);
console.log(sorted);
let result = binary(sorted,23);
console.log(result);