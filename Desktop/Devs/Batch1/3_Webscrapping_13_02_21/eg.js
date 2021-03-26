function fn(a){
    console.log(a, "hiiiii");
    a();
}
function inner(){
    console.log("hello");
}
fn(inner);