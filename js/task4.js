function task4(){

    const yourAge = prompt('enter your age: ', ' ');
    let u = (yourAge >= 0 && yourAge < 12) ? 'u\'r children' :
        (yourAge >= 12 && yourAge < 18) ? 'u\'r teenager' :
            (yourAge >= 18 && yourAge < 60) ? 'u\'r adult' :
                (yourAge >= 60) ? 'u\'r pensioner' : ' error ';

    alert( u );

}