function task4_2() {
    const strNum = +prompt('enter 0-9: ', ' ');

    if (strNum === 0) {
        alert(')');
    } else if (strNum === 1) {
        alert('!');
    } else if (strNum === 2) {
        alert('@');
    } else if (strNum === 3) {
        alert('#');
    } else if (strNum === 4) {
        alert('$');
    } else if (strNum === 5) {
        alert('%');
    } else if (strNum === 6) {
        alert('^');
    } else if (strNum === 7) {
        alert('&');
    } else if (strNum === 8) {
        alert('*');
    } else if (strNum === 9) {
        alert('(') ;
    } else {
        alert('error');
    }
}