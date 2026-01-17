function debounce(func, wait){
    let timeout;

    return function(){
        clearTimeout(timeout);
            func();
    
        clearTimeout(timeout)
    }
}