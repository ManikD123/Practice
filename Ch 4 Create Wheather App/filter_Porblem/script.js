const select = document.querySelector("select");
select.addEventListener('change', function(){
    // get the values from dropdown
    let filterValue = select.value;
    console.log(filterValue)
   let allTickets = document.querySelectorAll('.price')

   if( filterValue === 'none' ){
    for( let i = 0; i < allTickets.length; i++ ){
        allTickets[i].parentElement.style.display = 'block';
    }
   } else {
    // filter to be applied
    for( let i = 0 ; i < allTickets.length; i++ ){
        const catagory = allTickets[i].getAttribute('data-category');
        console.log(catagory)
        if(catagory === filterValue){
            allTickets[i].parentElement.style.display = 'block';
        } else {
            allTickets[i].parentElement.style.display = 'none';
        }
    }
   }

})