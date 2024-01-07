// Task 1
function calculateAreaTask1() {
    var sideA1 = parseFloat(document.getElementById('sideA1').value);
    var sideB1 = parseFloat(document.getElementById('sideB1').value);
    var sideC1 = parseFloat(document.getElementById('sideC1').value);

    var s1 = (sideA1 + sideB1 + sideC1) / 2;
    var area1 = Math.sqrt(s1 * (s1 - sideA1) * (s1 - sideB1) * (s1 - sideC1));

    document.getElementById('result1').innerHTML = 'Відповідь: ' + area1.toFixed(2);
}



// Task 2
function calculateAreaTask2() {
    var sideA2 = parseFloat(document.getElementById('sideA2').value);
    var sideB2 = parseFloat(document.getElementById('sideB2').value);
    var angle = parseFloat(document.getElementById('angle').value);

    var area2 = 0.5 * sideA2 * sideB2 * Math.sin(angle * (Math.PI / 180));

    document.getElementById('result2').innerHTML = 'Відповідь: ' + area2.toFixed(2);
}




// Task 3
function calculateAreaTask3() {
    var side3 = parseFloat(document.getElementById('side3').value);
    var height3 = parseFloat(document.getElementById('height3').value);

    var area3 = 0.5 * side3 * height3;

    document.getElementById('result3').innerHTML = 'Відповідь: ' + area3.toFixed(2);
}




// Task 5
function calculateAreaTask5() {
    var sideA5 = parseFloat(document.getElementById('sideA5').value);
    var sideB5 = parseFloat(document.getElementById('sideB5').value);
    var sideC5 = parseFloat(document.getElementById('sideC5').value);
    var radius = parseFloat(document.getElementById('radius').value);

    var semiPerimeter = (sideA5 + sideB5 + sideC5) / 2;
    var area5 = (sideA5 * sideB5 * sideC5) / (4 * Math.sqrt(semiPerimeter * (semiPerimeter - sideA5) * (semiPerimeter - sideB5) * (semiPerimeter - sideC5)));

    document.getElementById('result5').innerHTML = 'Відповідь : ' + area5.toFixed(2);
}




// Task 6
function checkPalindrome() {
    var number = document.getElementById('number').value;

    var originalNumber = number;
    var reversedNumber = parseInt(number.toString().split('').reverse().join(''));

    if (originalNumber == reversedNumber) {
        document.getElementById('result6').innerHTML = 'Число ' + originalNumber + ' Є паліндромом.';
    } else {
        document.getElementById('result6').innerHTML = 'Число ' + originalNumber + ' Не є паліндромом.';
    }
}




// Task 7
function checkAnagram() {
    var word1 = document.getElementById('word1').value.toLowerCase();
    var word2 = document.getElementById('word2').value.toLowerCase();

    if (areAnagrams(word1, word2)) {
        document.getElementById('result7').innerHTML = ' анаграма.';
    } else {
        document.getElementById('result7').innerHTML = ' не анаграма.';
    }
}
// Для перевірки чи є анограмою
function areAnagrams(str1, str2) {
    var sortedStr1 = str1.split('').sort().join('');
    var sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}





// Task 8
function getFibonacciNumber() {
    var fibonacciNumber = parseInt(document.getElementById('fibonacciNumber').value);

    if (isNaN(fibonacciNumber) || fibonacciNumber <= 0) {
        alert('Будь ласка, введіть коректний додатній порядковий номер у послідовності Фібаначі.');
        return;
    }

    var result = calculateFibonacci(fibonacciNumber);

    document.getElementById('result8').innerHTML = 'Число з послідовності Фібаначі: ' + result;
}
// Для обчислення числа у послідовності Фібаначі
function calculateFibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
    }
}





// Task 9
function checkInFibonacciSequence() {
    var numberToCheck = parseInt(document.getElementById('checkFibonacci').value);

    if (isNaN(numberToCheck) || numberToCheck < 0) {
        alert('Будь ласка, введіть коректне додатнє число для перевірки.');
        return;
    }

    var result = isInFibonacciSequence(numberToCheck);

    if (result) {
        document.getElementById('result9').innerHTML = 'Це число належить послідовності Фібаначі.';
    } else {
        document.getElementById('result9').innerHTML = 'Це число не належить послідовності Фібаначі.';
    }
}
// Перевірка, чи число належить послідовності Фібаначі
function isInFibonacciSequence(num) {

    var sqrt5 = Math.sqrt(5);
    var n1 = 5 * Math.pow(num, 2) + 4;
    var n2 = 5 * Math.pow(num, 2) - 4;
    return isPerfectSquare(n1) || isPerfectSquare(n2);
}
// Перевірка, чи число є точним квадратом
function isPerfectSquare(num) {
    var sqrt = Math.sqrt(num);
    return sqrt === Math.floor(sqrt);
}