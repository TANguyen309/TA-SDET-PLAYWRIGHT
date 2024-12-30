/*Get input from user about height(m) and weight(kg) then calculate BMI
Underweight: <18.5
Normal weight: 18.5 – 24.9
Overweight: 25–29.9
Obesity: BMI of 30 or greater
*/
const readline = require('readline-sync');

let height = Number(readline.question('Please input your height(m):'));

let weight = Number(readline.question('Please input your weight(kg):'));

const BMI_result = (weight / (height * height));

if (BMI_result < 18.5) {
    console.log('You are underweight');

} else if (BMI_result <= 24.9) {
    console.log('You have a good body');

} else if (BMI_result <= 29.9) {
    console.log('You are overweight');

} else {
    console.log('You are obesity');

}