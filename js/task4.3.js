function task4_3() {
    const sNum = prompt('enter 3-digit number : ', ' ');
   if (sNum.length == 3){
       alert((Number(sNum[0]) == Number(sNum[1]) || Number(sNum[1]) == Number(sNum[2]) || Number(sNum[0]) == Number(sNum[2])
        || Number(sNum[0]) == Number(sNum[1]) == Number(sNum[2])) ? 'identical numbers exists' : 'identical numbers don\'t exists' );
   }

}