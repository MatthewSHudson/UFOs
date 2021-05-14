// import data
const tableData = data;

// d3 reference to the table
var tbody = d3.select("tbody");

// function to build the dynamic table
function buildTable(data) {
    tbody.html("");
    data.forEach(element => {
        let row = tbody.append("tr");
        Object.values(element).forEach(val => {
            let cell=row.append("td");
            cell.text(val);
            
        });
    });
}