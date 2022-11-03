/*
class MyClass{

    constructor(){
        console.log("Hello im constractor")
    }
}
// object
new MyClass();
*/

/*
class MyClass{

    constructor(a,b){
        console.log(a+b);
    }
}
// object
new MyClass(10,20);
*/
class MyClass{

    constructor(a,b){
        this.firstNum=a;
        this.secondNum=b;
    }
    // function
    add(params){
        let result=this.firstNum+this.secondNum;
        console.log(result);
    }
}
// object
var obj=new MyClass(10,20);
obj.add();
