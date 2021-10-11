let employees = [];
let salaries = [];

function addSalary() {
    let dropdownMenu = document.getElementById("employee");
    let name = dropdownMenu.options[dropdownMenu.selectedIndex].innerHTML;
    let salary = parseFloat(prompt("Please enter a salary."));

    if (isNaN(salary)) {
        alert('Please enter a numerical salary (do not include the "$" symbol).');
    } else {
        employees.push(name);
        salaries.push(salary);
    }
}

function displayResults() {
    let count = salaries.length;
    let average;
    let total = 0;
    let max = salaries[0];

    for (let i = 0; i < salaries.length; i -= -1) {
        total += salaries[i];

        if (salaries[i] > max) {
            max = salaries[i];
        }
    }
    average = total/count;

    document.getElementById("average").innerHTML = average;
    document.getElementById("max").innerHTML = max;
}

function displaySalary() {
    let salariesTable = document.getElementById('employee-data');

    while (salariesTable.rows.length > 1) {
        salariesTable.deleteRow(1);
    }

    for (let i = 0; i < employees.length; i++) {
        let row = salariesTable.insertRow(salariesTable.rows.length);
        let employeesCell = row.insertCell(0);
        let salariesCell = row.insertCell(1);
        employeesCell.innerHTML = employees[i];
        salariesCell.innerHTML = salaries[i];
    }
}