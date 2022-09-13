// Render a table and for each elements in the array, append a new row
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string
}

const student1: Student = {
  firstName: "Juli",
  lastName: "Carlosam",
  age: 32,
  location: "Medellin"
};

const student2: Student = {
  firstName: "Pao",
  lastName: "Perez",
  age: 28,
  location: "Medellin"
};

const studentsList = [student1, student2];

if (typeof document !== 'undefined') {
  // will run in client's browser only
  const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
  const table: HTMLTableElement = document.createElement("table");
  const thead: HTMLTableSectionElement = document.createElement("thead");
  const tbody: HTMLTableSectionElement = document.createElement("tbody");
  const rowHead: HTMLTableRowElement = thead.insertRow(0);
  const cellNam: HTMLTableCellElement = rowHead.insertCell(0);
  const cellLocat: HTMLTableCellElement = rowHead.insertCell(1);

  cellNam.innerHTML = "firstName";
  cellLocat.innerHTML = "location";

  table.append(thead);

  studentsList.forEach((stud) => {
    const row: HTMLTableRowElement = tbody.insertRow(0);
    const cellName: HTMLTableCellElement = row.insertCell(0);
    const cellLocation: HTMLTableCellElement = row.insertCell(1);

    cellName.innerHTML = stud.firstName;
    cellLocation.innerHTML = stud.location;
  });

  table.append(tbody);
  body.append(table);
}
