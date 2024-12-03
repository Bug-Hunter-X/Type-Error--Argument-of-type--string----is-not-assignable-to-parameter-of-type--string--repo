function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(people: string[]): string[] {
  return people.map(person => greeter(person));
}

let user = ["Jane User", "John User"];

console.log(greeterArray(user)); //Correct usage

//Another solution
for (const person of user) {
  console.log(greeter(person)); // Correct usage with loop
}
//or
user.forEach(person => console.log(greeter(person)));