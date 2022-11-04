class parent{

    hello1 (params) {
        console.log("hello 1 functiomn");
    }
    hello2 (params) {
        console.log("hello 2 functiomn");
    }
}

class child extends parent{
    demo(){
        super.hello1();
        super.hello2();
    }

}

var obj=new child();
 obj.demo();
 