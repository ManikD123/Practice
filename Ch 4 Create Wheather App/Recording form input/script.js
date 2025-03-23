const form = document.querySelector("form");
const name = document.querySelector("#name");
const marks = document.querySelector("#marks");
const tbody = document.querySelector("tbody")

let c = 3;

form.addEventListener("submit", addData)

    function addData(e){
      e.preventDefault();

      let Name = name.value;
      let Mark = marks.value

      let row = document.createElement("tr")

      let td1 = document.createElement("td")
      td1.innerText = c;
      row.appendChild(td1)
     
      let td2 = document.createElement("td")
      td2.innerText = Name;
      row.appendChild(td2)

      let td3 = document.createElement("td")
      td3.innerText = Mark
      row.appendChild(td3)

      tbody.appendChild(row)

      c=c+1
    }