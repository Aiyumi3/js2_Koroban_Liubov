function task3(){
    const str = prompt('enter 6-digit number of your ticket: ', ' ');

    let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
    let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);

    if(str >= 0 && str < 10**6){
         alert( (sum1 == sum2) ?
            'yes, your ticket is lucky' :
           'no, your ticket isn\'t lucky' );
    }

}