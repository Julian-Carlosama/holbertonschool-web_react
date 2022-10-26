import { Seq } from "immutable";

const makeUppercase = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default function printStudents(grades) {
  const bestStudents = Seq(grades)
    .filter((student) => student.score > 70)
    .map((student) => {
      const { firstName, lastName } = student;
      return {
        ...student,
        firstName: makeUppercase(firstName),
        lastName: makeUppercase(lastName),
      };
    });

  bestStudents.forEach((student) => console.log(student));
}

/*console.log(printStudents( {
  1: {
    score: 99,
    firstName: 'guillaume',
    lastName: 'salva',
  }
}))/*