// sets {es6 alreay has sets but here is the amnual implimentation} 

class MySet {
    constructor() {
        // collection will be holding the set
        this.collection = [];
    }
    //check the element already has in collectinon or not
    has(value) {
        return  (this.collection.indexOf(value) !== -1);
    }
    // this method will return  all the value
    values() {
        return this.collection
    }
    // this method will add an element in array
    add(value) {
        if(!this.has(value)){
            this.collection.push(value)
            return true;
        }
        return false;   
    }
    // this will remove an exsisting element
    remove(value){
        if(this.has(value)){
            let index = this.collection.indexOf(value);
            this.collection.splice(index,1);
            return true;
        }
        return false;
    }
    //this mathod will return the size of the collection
    size(){
        return this.collection.length;
    }
    // this method will return the union of two sets
    union(otherSet){
        let unionSet = new MySet();
        let firstSet  = this.values();
        let secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e)
        })
        secondSet.forEach(function(e){
            unionSet.add(e)
        })
        return unionSet;
    }
    // this method will return intersection of two sets
    interSection(otherSet){
        let interSectionSet = new MySet();
        let firstSet = this.values();
        firstSet.forEach(function(e) {
            if(otherSet.has(e)){
                interSectionSet.add(e)
            }
        })
        return interSectionSet;
    }
    // this method will return the difference of two sets in a net sets
    difference(otherSet){
        let differenceSet = new MySet();
        let firstSet = this.values();
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        })
        return differenceSet;
    };
    // this method will check weather this set is the subset of the other set
    subSet(otherSet){
        let firstSet = this.values();
        return firstSet.every(function(values){
            return otherSet.has(value);
        })
    };
}
let setA = new MySet();
setA.add('a');
setA.add('b');
setA.add('c');
setA.add('d');
setA.add('e');
setA.add('f');
setA.add('g');

let setB= new MySet();
setB.add('1');
setB.add('2');
setB.add('3');
setB.add('4');
setB.add('5');
setB.add('6');
setB.add('7');
setB.add('8');
console.log(setB.values())
console.log(setB.has('100'))