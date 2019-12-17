function third(str){
    return str+" Shree";
}
function second(){
    return third("Divya")
}
function first(){
    var name=second();
    console.log("My full name is " + name)
}
first();