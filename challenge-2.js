// Write a JavaScript function that accepts two numbers to generate an array between them. For example, if the two numbers are 4 and 7, the output should be [4, 5, 6, 7] and -4 and 7 should return [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]

// This function takes two parameters as input (num1 and num2)
function arrayFromRange(num1, num2) {
    // An empty array to push the updated the values
    let output = []

    // Loops through each number until it hits the inputs i.e starts from 4 stops at 7
    for (let i = num1; i <= num2; i++) {
        // Pushes each number into the empty array
        output.push(i)
    }

    // Returns the updated array
    return output
}

// Checks the output
console.log(arrayFromRange(12, 15)) // Output: [ 12, 13, 14, 15 ]