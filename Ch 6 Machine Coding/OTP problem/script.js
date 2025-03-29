const inp = document.querySelector(".inputs");

inp.addEventListener('input',(ev)=> {
    if(isNaN(ev.target.value)){
        ev.target.value = '';
        return;
    }
    if(ev.target.value != ''){
        if(ev.target.nextElementSibling){
            ev.target.nextElementSibling.focus();
        }
    }
});

inp.addEventListener('keyup', (event) => {
    if(event.key === 'Backspace' || event.key === 'Delete') {
        event.target.value = '';
        if (event.target.previousElementSibling) {
            event.target.previousElementSibling.focus();
        }
    }
});

