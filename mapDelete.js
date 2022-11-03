var MyMap=new Map();
MyMap.set("key1","Bangladesh")
MyMap.set("key2","Bhutan")
MyMap.set("key3","Sirilanka")
MyMap.set("key4","Maldiv")
MyMap.set("key5","Nepal")
MyMap.set("key6","Thailand")

// MyMap.delete("key3")
// MyMap.delete("key2")
// MyMap.clear()

 /*
 for(let myvalue of MyMap.values()){
     console.log(myvalue);
 }  
 */
// console.log(MyMap.get("key4"));

if(MyMap.has("key8")){
    console.log("yes")
}else{
    console.log("no")
}