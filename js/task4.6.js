function task4_6() {
    const strUSD = prompt('enter  USD  : ', ' ');
    const choose = prompt('choose UAH/EUR/AUD  : ', ' ');
    const UAH = 28.21;
    const EUR = 0.85;
    const AUD = 1.41;
    switch (true) {
        case choose == 'UAH' :
            let uaMoney = strUSD * UAH ;
            let roundedGrn = uaMoney.toFixed(2);
            alert('UAH = '+ roundedGrn);
            break;
        case choose == 'EUR' :
            let euro = strUSD * EUR;
            let roundedEuro = euro.toFixed(2);
            alert('EUR = '+ roundedEuro);
            break;
        case choose == 'AUD' :
            let aud = strUSD * AUD;
            let roundedAud = aud.toFixed(2);
            alert('AUD = '+ roundedAud);
            break;
        default :
            alert(' currency error ');
    }

}