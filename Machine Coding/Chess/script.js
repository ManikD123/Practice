window.addEventListener("load", function(){
    const tableBody = document.querySelector("#tablebody");

    for( let ri = 0; ri < 8; ri++ ){
        const tr= document.createElement("tr");
        for( let ci= 0; ci < 8; ci++){
            const td = document.createElement("td");
            td.textContent = `${ri} - ${ci}`;
            td.setAttribute("data-index", `${ri} - ${ci}`);
        //  td.setAttribute("data-random", `${ri} - ${ci}`); // get a random number generated
            td.classList.add("box");
            let boxes = document.querySelectorAll('.box');
      
            if((ri + ci) % 2 == 0){
                td.classList.add("white");
            } else {
                td.classList.add("black");
            }
            tr.appendChild(td);
        }
        tableBody.appendChild(tr);
    }
});

const table = document.querySelector(".table");
const tableBox = document.getElementsByClassName("box");

function cleanUp() {
  for (let i = 0; i < tableBox.length; i++) {
    tableBox[i].classList.remove("yellow");
  }
}
table.addEventListener("mouseleave", () => {
  cleanUp();
});

table.addEventListener('mouseover', function(event) {
    cleanUp();
    const tablecell = event.target;
    const dataIndex = tablecell.dataset.index; // output the dataset in form of 1-1, 2-3 similar
    const [ri, ci] = dataIndex.split("-").map((idx) => parseInt(idx));
    
    const pathStorage = {};
    pathStorage[dataIndex] = true;
    topleft(ri, ci, pathStorage);
    topRight(ri, ci, pathStorage);
    bottomleft(ri, ci, pathStorage);
    bottomRight(ri, ci, pathStorage);
   console.log(pathStorage);

    for (let i = 0; i < tableBox.length; i++) {
    if (pathStorage[tableBox[i].dataset.index] === true) {
      tableBox[i].classList.add("yellow");
    }
  }
});

function topleft( ri, ci, pathStorage){
    ri--;
    ci--;
    while( ri >= 0 && ci >= 0 ){
        const dataIndex = `${ri}-${ci}`;
        pathStorage[dataIndex] = true;
        ri--;
        ci--;
    }
}

function topRight( ri, ci, pathStorage){
    ri--;
    ci++;
    while(ri >= 0 && ci <= 7){
        const dataIndex = `${ri}-${ci}`;
        pathStorage[dataIndex] = true;
        ri--;
        ci++;
    }
}
function bottomleft( ri, ci, pathStorage){
    ri++;
    ci--;
    while( ri <= 7 && ci >= 0 ){
        const dataIndex = `${ri}-${ci}`;
        pathStorage[dataIndex] = true;
        ri++;
        ci--;
    }
}
function bottomRight( ri, ci, pathStorage){
    ri++;
    ci++;
    while( ri <= 7 && ci <= 7 ){
        const dataIndex = `${ri}-${ci}`;
        pathStorage[dataIndex] = true;
        ri++;
        ci++;
    }
}