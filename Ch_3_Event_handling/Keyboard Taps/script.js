let s1 = document.querySelector("#s1");
let s2 = document.querySelector("#s2");
let s3 = document.querySelector("#s3");

let result = document.querySelector("html").getBoundingClientRect();

document.addEventListener('keypress', function(ev){
    const key = ev.key;
    if(key == 1){
        s1.scrollIntoView();
    } else if (key == 2){
        s2.scrollIntoView();
    } else if(key == 3){
        s3.scrollIntoView();
    } else if(key == 't'){
        window.scrollBy(0, -result.height)
    } else if(key == 'b'){
        window.scrollBy(0, result.height)
    }

})