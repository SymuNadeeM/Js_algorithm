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

