// queue data stracture 
// first in first out
// Class emplimentation of  Queue data stracture
class Queue{
    constructor(){
        // holding the collection
        this.collection = []
    }
    // push an element at the last of the collection
    enqueue(value){
        this.collection.push(value);
    }
    //Remove the first element of the collection 
    dequeue(){
        return  this.collection.shift();
    }
    //print the collection
    print(){
        console.log(this.collection);
    }
    //give the front element of the collection
    front(){
        return this.collection[0];
    }
    size(){
        return this.collection.length();
    }
    isEmpty(){
       return (this.collection.length === 0);
    }
}
let myQueue = new Queue();
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(4);
myQueue.enqueue(7);
myQueue.enqueue(5);
myQueue.enqueue(6);
myQueue.print()
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.print()
