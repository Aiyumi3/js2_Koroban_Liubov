function task4_8() {
    const strCircum = prompt('enter circumference : ', ' ');
    const strPerim = prompt('enter perimeter : ', ' ');
    let d = (strCircum / Math.PI).toFixed(1);
    let a = (strPerim / 4).toFixed(1);

    let cirinSquare = (d == a) ? 'circle inscribed in a square' : 'circle not inscribed in a square';
    alert(cirinSquare);
}