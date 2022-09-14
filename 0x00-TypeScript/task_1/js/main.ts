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


// Function printTeacher
function printTeacher(firstName: string, lastName: String): string {
  return `${firstName[0]}, ${lastName}`;
};
// test printTeacher
console.log(printTeacher("Juli", "Carlosam"));


// printTeacherFunction interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string
}


// Class StudentClass
//export const StudentClas: constructorStudent =
class StudentClass implements stdClassInterf {
  firstName : string;
  lastName : string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return `${this.firstName}`;
  }
}

// Student constructor interface
interface constructorStudent {
  new (firstName: string, lastName: string): stdClassInterf;
}

// Interface student class
interface stdClassInterf {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

const stdentCls : StudentClass = new StudentClass("Juli", "Carlosam");
/*console.log(stdentCls.displayName());
console.log(stdentCls.workOnHomework());*/
