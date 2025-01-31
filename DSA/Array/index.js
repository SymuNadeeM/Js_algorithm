
// ::Custom Array With Push::
/* 
class myArray{
  constructor(){
    this.length =0,
    this.data ={}
  }
  push(item){
    this.data[this.length] = item
    this.length ++;
    return this.length
  }
}

const myNewArray = new myArray()
myNewArray.push("x");
myNewArray.push("Y");
myNewArray.push("Z");

console.log(myNewArray.data);

*/

class myArray{
  constructor(){
    this.length =0;
    this.data = {}
  }
  push(item){
    this.data[this.length] = item
    this.length ++ ;
    return this.length
  }
  get(index){
    return this.data[index]
  }
  
}

const arr = new myArray()
arr.push("Apple")
arr.push("Orange")
arr.push("Banana")
arr.push("Watermill")

console.log(arr.get(2));
