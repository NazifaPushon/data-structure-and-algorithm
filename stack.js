// stacks by array
let letter = []; // this is our stack 
let word = 'mom' // main word 
let reversedWord = "" // revarsed word

// put letters into stack
for(let i =0 ; i< word.length; i++) {
    letter.push(word[i]);
}

// pop of the letters into reversed word
for(let i =0;i<word.length; i++) {
    reversedWord += letter.pop();
}

// cheaking if paligdrom 
if(word === reversedWord) {
    console.log(`${word} is palindrom number`)
}else{
    console.log(`${word} is not palindrom number`)
}


// stack by class
class Stack {
    constructor(){
       this.count = 0;
       this.storage = {} ;
    }
    push(value) {
        this.storage[this.count]  = value ;
        this.count ++ ;
    }
    pop(){
       if(this.count === 0){
           return undefined;
       }
       this.count--;
       let result = this.storage[this.count];
       delete this.storage[this.count];
       return result;
    }
    size(){
        return this.count;
    }
    peek(){
        return this.storage[this.count-1];
    }
}

let mystack = new Stack();
mystack.push(1)
mystack.push(2)
mystack.push(3)
console.log(mystack.pop());
console.log(mystack.size());
console.log(mystack.peek());