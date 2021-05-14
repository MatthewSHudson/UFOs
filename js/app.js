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
};

// function to react to a click, used for filtering the table
function handleClick() {
    let date =d3.select("#datetime").property("value");
    let filteredData = tableData;
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    buildTable(filteredData);
};

// event to listen for button click
d3.selectAll("#filter-btn").on("click", handleClick);

// build table when the page loads
buildTable(tableData);