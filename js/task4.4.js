function task4_4() {

    const year = +prompt('enter year : ', ' ');
    const n1 = 400;
    const n2 = 4;
    const  n3 = 100;
    alert(  (year % n1 == 0 || year % n2 == 0 && year % n3 !=0) ?
      'it\'s leap-year' :  'it\'s not leap-year' );

}