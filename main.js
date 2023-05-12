// const userInput = Number(prompt('Enter a number: '));

// if (userInput % 2) {
//   console.log("This is an odd number");
// } else if (!userInput) {
//   console.log("This is zero");
// } else {
//   console.log("This is an even number");
// }


// userInput % 2
//   ? console.log("This is an odd number")
//   : console.log("This is an even number") ;


// const a = 1010;
// const b = 180;

// if (a > 100 && b > 100) {
//  console.log(a > b ? a : b);
// } else {
//   console.log(b + 512);
// }


// let link = 'https://my-site.com/about/lll';

// if (!link.endsWith('/') && link.includes('my-site')) {
//   console.log(link += '/');
// }

// console.log(!link.endsWith("/") && link.includes('my-site') ? link += "/" : link);


// const hours = 2;

// if (hours < 17) {
//   console.log('Pending');
// } else if (hours >= 17 && hours <= 24) {
//   console.log('Expires');
// } else {
//   console.log('Overdue');
// }


// const daysUntilDeadline = 2;

// if (!daysUntilDeadline) {
//   console.log("Today");
// } else if (daysUntilDeadline === 1) {
//   console.log("Tomorrow");
// } else if (daysUntilDeadline === 2) {
//   console.log("Day after tomorrow");
// } else {
//   console.log("Day in the future");
// }


// switch (daysUntilDeadline) {
//   case 0:
//     console.log("Today");
//     break;

//   case 1:
//     console.log("Tomorrow");
//     break;

//   case 2:
//     console.log("Day after tomorrow");
//     break;
  
//   default:
//     console.log("Day in the future");
// }


// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 1) {
//   if (!(i % 5)) {
//     console.log(i);
//   }
// }


// const employees = 10;
// const salary = (Math.random() * (5000 - 500) + 500);
// const totalSalary = console.log((salary * employees).toFixed(2));

const min = 1;
const max = 7;
let total = 0;

for (let i = min; i <= max; i += 1) {
  if (!(i % 2)) {
    total += i;
    console.log(i);
  }
}

console.log(total);

