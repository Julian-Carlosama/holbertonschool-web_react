// Write an interface named Teacher and ...
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [proper: string] : any
}

// Testing Teacher interface
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);


// Interface Directors...
interface Directors extends Teacher {
  numberOfReports : number
}

// Testing Dicrectors interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);


// class printTeacher
function printTeacher(firstName: string, lastName: String): string {
  return `${firstName[0]}, ${lastName}`
}

// test printTeacher
console.log(printTeacher("Juli", "Carlosam"));

// printTeacherFunction interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string
}


// Class StudentClass
class StudentClass {
  firstName : string;
  lastName : string;

  constructor(firstName : string, lastName : string) {
    this.firstName;
    this.lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return `${this.firstName}`;
  }
}