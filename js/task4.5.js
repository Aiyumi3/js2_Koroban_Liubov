function task4_5() {
    const num5Dig = prompt('enter 5-digit number : ', ' ');
    if (num5Dig.length == 5) {
        let revNum = Number(num5Dig.split('').reverse().join(''));
        alert( ( revNum == num5Dig ) ? 'this number is a palindrome' : 'this number isn\'t a palindrome' );
    }

}