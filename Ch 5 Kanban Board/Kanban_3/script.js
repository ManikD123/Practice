let addbtn = document.querySelector('.add-btn');
let modalcont = document.querySelector('.modal-cont');
let mainCont = document.querySelector('.main-cont');
let textArea = document.querySelector('.text-area-cont');
let allTickets = document.querySelector('.ticket-cont');

// show Modal Flag
let addtaskFlag = false;

// removing the ticket
let removeTaskFlag = false;

// configuring the delete button
let removeBtn = document.querySelector(".delete-btn");
removeBtn.addEventListener('click', function(){
    removeTaskFlag = !removeTaskFlag;

    if(removeTaskFlag){
        alert('Delete Button Activated.');
        removeBtn.style.color = 'red';
    } else {
        removeBtn.style.color = 'white';
    }
});


//Function to make Enter task modal appear or dissapear

addbtn.addEventListener('click', function(){
    addtaskFlag = !addtaskFlag;

    if( addtaskFlag === true ){
        modalcont.style.display = 'flex';
    } else {
        modalcont.style.display = 'none';
    }
})

// Generating task tickets, which involves creating a 
// function to dynamically generate new task tickets.

function createTicket(ticketColor,ticketId, ticketTask){
    // cteate new ticket element
    let ticketcont = document.createElement("div");

    // setting class attribute for ticket attribute
    ticketcont.setAttribute('class', 'ticket-cont');

    ticketcont.innerHTML = 
            `<div class="ticket-color" style="background-color: ${ticketColor};"></div>
            <div class="ticket-id">${ticketId}</div>
            <div class="task-area">${ticketTask} </div>`

    mainCont.appendChild(ticketcont);
    handleRemoval(ticketcont);
}

function handleRemoval(ticketElem){
    ticketElem.addEventListener('click', function(){
        if(removeTaskFlag ){
            return;
        } else{
            ticketElem.remove();
        }
    })
}



// create ticket after pressing the shift key

modalcont.addEventListener('keydown', function(event){
    let key = event.key;

    if( key === 'Shift' ){
        let taskContent = textArea.value;
        let tickerID = shortid();
        createTicket(modalPriorityColor,tickerID, taskContent);
        modalcont.style.display = 'none'; //hide the modal
        textArea.value = '';
    }
})



// taking the color priority from user then updating the color selected from user
let colors = ["lightpink", "lightgreen","lightblue","black"];
let modalPriorityColor = colors[colors.length-1]; // defalt black

let allpriorityColors = document.querySelectorAll('.priority-color');

allpriorityColors.forEach(function(colorElem){
    colorElem.addEventListener('click', function(){
        console.log(colorElem);

        allpriorityColors.forEach(function(priorityColorElem){
            priorityColorElem.classList.remove('active');
        })

        colorElem.classList.add('active');
        
        modalPriorityColor = colorElem.classList[0];  // update modal priority color
       // console.log(modalPriorityColor);
    })
})

