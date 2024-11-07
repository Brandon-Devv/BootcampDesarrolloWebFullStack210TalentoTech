const fizzbuzz = document.getElementById('result');

for (let i = 1; i <= 100; i++) {
    let element = document.createElement('div');
    element.classList.add('box');

    if (i % 3 === 0 && i % 5 === 0) {
        element.textContent = "FizzBuzz";
        element.classList.add('fizzbuzz');
    } else if (i % 3 === 0) {
        element.textContent = "Fizz";
        element.classList.add('fizz');
    } else if (i % 5 === 0) {
        element.textContent = "Buzz";
        element.classList.add('buzz');
    } else {
        element.textContent = i;
    }

    fizzbuzz.appendChild(element);
}