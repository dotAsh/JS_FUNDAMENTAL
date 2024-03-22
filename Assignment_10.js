
//Assignment - 10
function groupStudentsByName(students) {
    let grouped = {};
    for(let i = 0;i<students.length;i++){
        if(grouped.hasOwnProperty(students[i].name)){
            grouped[students[i].name].push(students[i]);
        }else{
            grouped[students[i].name] = [students[i]];
        }
    }
    return grouped;
}

// data
let students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Alice", age: 23 },
    { name: "Charlie", age: 21 },
];

// Test 
console.log("Grouped Students:", groupStudentsByName(students));