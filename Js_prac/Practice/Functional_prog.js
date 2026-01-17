function greet(name, callback){
    console.log("Hello", name);
    callback();
}

function saygoodbye(){
    console.log("good bye!");
}
greet("Alice", saygoodbye);