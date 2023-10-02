// destructuring of objects

const course = {
    name:"Namaste Javascript",
    courseInstructer:"Akshay Saini"
}

// without destructuring
console.log(course.courseInstructer);


// with destructuring
const {courseInstructer:instructer} = course;
console.log(instructer);

//json api format

// {
//     name: "pythhon",
//     creater : "guido van rosum",
// }