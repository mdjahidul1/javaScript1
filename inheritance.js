class parent{

    hello1 (params) {
        console.log("hello 1 functiomn");
    }
    hello2 (params) {
        console.log("hello 2 functiomn");
    }
}

class child extends parent{


}

var obj=new child();
 obj.hello1();
 obj.hello2();
