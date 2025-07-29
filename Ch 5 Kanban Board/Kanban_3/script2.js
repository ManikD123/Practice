let addbtn = document.querySelector('.add-btn');
let modalcont = document.querySelector('.modal-cont');
let mainCont = document.querySelector('.main-cont');
let textArea = document.querySelector('.text-area-cont');
let allTickets = document.querySelector('.ticket-cont');

// LS Implementation
// givem OR considition in case the value is null, so will show {} --> empty Array
const ticketsArr = JSON.parse(localStorage.getItem('tickets') || '[]');
console.log(ticketsArr);
// for every reload.. fetch from LD when started
function init(){
    // whenever locd, I will see data from the LS
    // is something is present I till call createTicket() and that funtion

    if(localStorage.getItem("tickets")) {
        ticketsArr.forEach(function(ticket){
        createTicket(ticket.ticketColor, ticket.ticketId, ticket.ticketTask);
        })
    }

}

init();

function updateLocalStorage(){
    // to set the LS from your local array
    localStorage.setItem("tickets", JSON.stringify(ticketsArr));
}

// create a function to create unique ticket
function getTicketArrIndex(id){
    // give me index from array which gets attached
    let foundIdx = ticketsArr.findIndex(function(tkt){
        return id === tkt.ticketId;
    })
    return foundIdx;
}

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
            <div class="task-area">${ticketTask} </div>
            <div class="ticket-lock">
            <i class="fa-solid fa-lock"></i>
            </div>`

    mainCont.appendChild(ticketcont);

    handleRemoval(ticketcont);
    handleLock(ticketcont);
    handleColor(ticketcont);
}

function handleRemoval(ticketElem){
    const idElem = ticketElem.querySelector('.ticket-id');
    const id = idElem.innerText;
    ticketElem.addEventListener('click', function(){
        if(!removeTaskFlag ){
            return;
        } else{
            ticketElem.remove();
            // update LS
            const tktIdx = getTicketArrIndex(id);
            ticketsArr.splice(tktIdx, 1);
            updateLocalStorage();
        }
    })
}

// create ticket after pressing the shift key

modalcont.addEventListener('keydown', function(event){
    let key = event.key;

    if( key === 'Shift' ){
        let taskContent = textArea.value;
        let tickerID = shortid();
        createTicket(modalPriorityColor, tickerID, taskContent);
        // USING LS IN CREATE FLOW..
        ticketsArr.push({ticketId: tickerID, ticketTask: taskContent, ticketColor: modalPriorityColor  });

        updateLocalStorage();

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
});

// Handling Lock

let lockClose = "fa-lock";
let lockOpen = "fa-lock-open"

function handleLock(ticket){
    let ticketockElem = ticket.querySelector(".ticket-lock");
    let ticketLockIcon = ticketockElem.children[0];

    let ticketTaskArea = ticket.querySelector('.task-area');
    const idElem = ticket.querySelector('.ticket-id');
    const id = idElem.innerText;

    ticketLockIcon.addEventListener('click', function(){
        const ticketIdx = getTicketArrIndex(id);

        console.log("Lock selected"); // log message for lock click
        if( ticketLockIcon.classList.contains(lockClose)){
            ticketLockIcon.classList.remove(lockClose);
            ticketLockIcon.classList.add(lockOpen);
            ticketTaskArea.setAttribute('contenteditable', 'true'); // change' content editable fireld to true
        } else {
            ticketLockIcon.classList.remove(lockOpen);
            ticketLockIcon.classList.add(lockClose);
            ticketTaskArea.setAttribute('contenteditable', 'false');// change' content editable fireld to false
        }

        ticketsArr[ticketIdx].taskContent = ticketTaskArea.innerText;
        updateLocalStorage()

    });
}

function handleColor(ticket){
    let ticketColorBand = ticket.querySelector(".ticket-color");

   const idelem = ticket.querySelector(".ticket-id");


    ticketColorBand.addEventListener('click', function(){

        const ticketIdx = getTicketArrIndex(idelem.innerText);
        let currentColor = ticketColorBand.style.backgroundColor;

        let currentColorIdx = colors.findIndex(function(color){
            return currentColor === color;
        });

        currentColorIdx++; 

        let newTicketColorIdx = currentColorIdx % colors.length;
        let newTicketColor = colors[newTicketColorIdx];

        ticketColorBand.style.backgroundColor = newTicketColor;

      ticketsArr[ticketIdx].ticketColor = newTicketColor;
    updateLocalStorage()
        
    })

}

/*let toolboxcolors = document.querySelectorAll(".color");

for( let i = 0; i < toolboxcolors.length; i++ ){
    toolboxcolors[i].addEventListener('click', function (){
        let selectedToolBoxColor = toolboxcolors[i].classList[0];

        let allTickets = document.querySelectorAll(".ticket-cont");
        for( let j = 0; j < allTickets.length; j++ ){
            allTickets[j].remove();

            let filteredTickets = ticketsArr.filter(function(ticket){
                return selectedToolBoxColor === ticket.ticketColor;
            });

        }
    });
}*/

const toolBoxColors = document.querySelectorAll('.color');

toolBoxColors.forEach(function(colorElem){
    colorElem.addEventListener('click', function(){
        const selectedColor = colorElem.classList[0];
        console.log({selectedColor});
        const allTickets = document.querySelectorAll('.ticket-cont');
        console.log(allTickets);
        allTickets.forEach(function(ticketElem){
            const ticketColorBand = ticketElem.querySelector(".ticket-color");
            if( ticketColorBand.style.backgroundColor === selectedColor ){
                // its a match with color
                ticketElem.style.display = 'block'
            } else {
                ticketElem.style.display = 'none'
            }
        })
    })

// reset all filters
    colorElem.addEventListener('dblclick', function(){
        const allTickets = document.querySelectorAll('.ticket-cont');
        allTickets.forEach(function(ticketElem){
            ticketElem.style.display = 'block';
        })
    })
    
})



