console.log("Manik")

let addBtn = document.querySelector(".add-btn");
let removeBtn = document.querySelector(".remove-btn");
let addTaskflag = false;
let modalcont = document.querySelector(".modal-cont")
let maincont = document.querySelector(".main-cont")
let textAreaCont = document.querySelector('.textArea-cont')
let ticketsArr = [];

addBtn.addEventListener("click", function(){
    addTaskflag = !addTaskflag;

    if( addTaskflag == true){
        modalcont.style.display = 'flex';
    } else {
        modalcont.style.display = 'none';
    }

})

function createTicket(ticketColor, ticketID, ticketTask) {
    let ticketCont = document.createElement('div');
    ticketCont.setAttribute('class', 'ticket-cont');

    ticketCont.innerHTML = `<div class="ticket-color ${ticketColor}"></div>
        <div class="ticket-id">${ticketID}</div>
        <div class="task-area" contenteditable="false">${ticketTask}</div>
        <div class="ticket-lock"> <i class="fa-solid fa-lock"></i></div>`

    maincont.appendChild(ticketCont)
    ticketsArr.push({ ticketColor, ticketTask, ticketID });

  console.log(ticketsArr);
    handleRemoval(ticketCont);
    handleLock(ticketCont);
    handlecolor(ticketCont);
    
}


modalcont.addEventListener('keydown', function(e){
    let key = e.key;

    if(key == 'Shift'){
        let taskContent = textAreaCont.value;
        let ticketID = shortid();
        createTicket(modalPriorityColor, ticketID, taskContent);
        modalcont.style.display = 'none';
        textAreaCont.value='';
    }
})


let colors = ["lightpink", "lightgreen", "lightblue", "black"];
let modalPriorityColor = colors[colors.length - 1];

let allPriorityColors = document.querySelectorAll('.priority-color');

allPriorityColors.forEach(function(colorElem){
    colorElem.addEventListener('click', function(){
        allPriorityColors.forEach(function(priorityColorElem){
            priorityColorElem.classList.remove('active')
        })
        colorElem.classList.add('active');  

        modalPriorityColor = colorElem.classList[0]; // update modal priority Color

    })
})

let removeTaskFlag = false;

removeBtn.addEventListener('click', function(){
    removeTaskFlag = !removeTaskFlag;
    if(removeTaskFlag) {
        alert('Delete Button Activated');
        removeBtn.style.color = 'red'
    } else {
        removeBtn.style.color = 'white'
    }
});

function handleRemoval(ticket) {
    ticket.addEventListener("click", function(){
        if(!removeTaskFlag) return;
        else {
            ticket.remove();
        }
    })
}

let lockClose = "fa-lock";
let lockOpen = "fa-lock-open";

function handleLock(ticket){
    let ticketLockElem = ticket.querySelector(".ticket-lock");
    let ticketLockIcon = ticketLockElem.children[0];

    let ticketTaskArea = ticket.querySelector(".task-area");

    ticketLockIcon.addEventListener("click", function(){
        console.log("Lock Selected")

        if(ticketLockIcon.classList.contains(lockClose)){
            ticketLockIcon.classList.remove(lockClose);
            ticketLockIcon.classList.add(lockOpen);
            ticketTaskArea.setAttribute("contenteditable", "true");

        } else {
            ticketLockIcon.classList.remove(lockOpen);
            ticketLockIcon.classList.add(lockClose);
            ticketTaskArea.setAttribute("contenteditable", "false");
        }

    })
}


function handlecolor(ticket){
    let ticketColorBand = ticket.querySelector(".ticket-color");
    ticketColorBand.addEventListener("click", function(){
        let currentColor = ticketColorBand.classList[1]; 
        
        let currentColorIdx = colors.findIndex(function(color){
           return currentColor === color;
        });
        currentColorIdx++;
        let newTicketColorIdx = currentColorIdx % colors.length;
        let newTicketColor = colors[newTicketColorIdx];
        ticketColorBand.classList.remove(currentColor);
        ticketColorBand.classList.add(newTicketColor);
    })
}


let toolboxColors = document.querySelectorAll(".color");

for (let i = 0; i < toolboxColors.length; i++) {
  toolboxColors[i].addEventListener("click", function () {
    let selectedToolBoxColor = toolboxColors[i].classList[0];

    let filterdTickets = ticketsArr.filter(function (ticket) {
      return selectedToolBoxColor === ticket.ticketColor;
    });

    let allTickets = document.querySelectorAll(".ticket-cont");

    for (let i = 0; i < allTickets.length; i++) {
      allTickets[i].remove();
    }

    filterdTickets.forEach(function (filterdTicket) {
      createTicket(
        filterdTicket.ticketColor,
        filterdTicket.ticketID,
        filterdTicket.ticketTask
      );
    });
  });
}