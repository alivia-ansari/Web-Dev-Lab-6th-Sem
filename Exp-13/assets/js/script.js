
function generateTable() {
    let rows = parseInt(document.getElementById("rows").value);
    let cols = parseInt(document.getElementById("cols").value);
    let table = document.getElementById("table");

    // clear existing table
    table.innerHTML = "";

    // create table rows and columns
    for (let i = 1; i <= rows; i++) {
      let row = document.createElement("tr");
      for (let j = 1; j <= cols; j++) {
        let cell = document.createElement("td");
        cell.appendChild(document.createTextNode(i * j));
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
  }
