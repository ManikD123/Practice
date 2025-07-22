const add = document.querySelector('.adding')
const subtract = document.querySelector("#substract");
const reset= document.querySelector("#Reset");
const counter = document.querySelector(".number");
const cnt_inc_dec = document.querySelector("#incdec");

add.addEventListener("click",()=> {
    const CurrentCount = parseInt(counter.innerText);
    const inc_dec_value = parseInt(cnt_inc_dec.value);
    const updated_counter = CurrentCount + inc_dec_value;
    counter.innerText = updated_counter;
    if( updated_counter > 0 ){
        subtract.removeAttribute("disabled", true);
        reset.removeAttribute("disabled", true);
    }
});

subtract.addEventListener('click', () => {
    const CurrentCount = parseInt(counter.innerText);
    const inc_dec_value = parseInt(cnt_inc_dec.value);
    const updateNumber = CurrentCount - inc_dec_value;

    counter.innerText = updateNumber > 0 ? updateNumber : 0;

    if( updateNumber <= 0 ){
        subtract.removeAttribute("disabled", true);
        reset.removeAttribute("disabled", true);
    }
});

reset.addEventListener('click', () => {
    counter.innerText = 0;
    cnt_inc_dec.value = 0;
    subtract.removeAttribute("disabled");
    reset.removeAttribute("disabled");
})