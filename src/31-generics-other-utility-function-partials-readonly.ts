// EG2: Readonly
const names: Readonly<string[]> = ["Amir", "Nasir", "Ronith"];

// names.push("Farhin");
console.log("names", names);

// Eg1: Partial
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function courseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  // some logic.. eg validation

  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}
