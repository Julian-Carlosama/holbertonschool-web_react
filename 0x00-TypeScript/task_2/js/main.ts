// DirectorInterface Interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface interface 
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class 
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
};

// Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// CreateEmployee function 
function createEmployee(salary: number | string): Director | Teacher  {
  if(salary < 500 && typeof salary === "number")
    return new Teacher();
  return new Director();
}

// Testing function createEmploye
console.log(createEmployee(200));
console.log(createEmployee(1200));
console.log(createEmployee('$500'));

// isDirector function
function isDirector(employee: TeacherInterface | DirectorInterface): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;

}

// executeWork function
function executeWork(employee: DirectorInterface | TeacherInterface): string {
  return isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks();
}
// Testing executeWork
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));


// String literal type
type Subjects = "Math" | "History";

function teachClass(todayClass:Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  }
}

// Testing Subjects
console.log(teachClass('Math'));
console.log(teachClass('History'));