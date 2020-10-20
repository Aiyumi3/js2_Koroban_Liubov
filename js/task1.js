function task1() {
    const strL = +prompt('enter length : ', ' ');
    const strW = +prompt('enter width : ', ' ');
    const strH = +prompt('enter height : ', ' ');
    const m = 16;

    if (strH <= 1000 && strW <= 1000 && strL <= 1000) {
        let s = 2 * strH * (strW + strL);
        let minNum = Math.ceil(s / m);
        alert('minimum number of paint cans =  ' + minNum + '.');
    }

}