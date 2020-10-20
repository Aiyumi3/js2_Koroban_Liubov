function task4_10() {

    const strDate = prompt('enter year/month/day : ', ' ');
    let dateSplit = strDate.split('/');

    let d = new Date(dateSplit[0], dateSplit[1]-1, dateSplit[2]); d.setFullYear(d.getFullYear() +1);
    d.setDate(d.getDate() + 1);
    d.setMonth(d.getMonth() + 1);

    const n1 = 400;
    const n2 = 4;
    const  n3 = 100;
    let nY = Number(d.getFullYear() );
    let leapY= (nY % n1 == 0 || nY % n2 == 0 && nY % n3 !=0) ?
        'it\'s leap-year' :  'it\'s not leap-year';
    alert(d +  ', ' + leapY);
}