function task4_7() {
    const puAmount = prompt('enter  purchase Amount : ', ' ');
    let dis1 = 0.03;   let dis2 = 0.05;   let dis3 = 0.07;
    let amDis1 = (puAmount * dis1).toFixed(2);   let amDis2 = (puAmount * dis2).toFixed(2);
    let amDis3 = (puAmount * dis3).toFixed(2);
    let amoDis = (puAmount >= 200 && puAmount < 300) ?  amDis1 +', 3% discount' :
        (puAmount >= 300 && puAmount < 500) ? amDis2 +', 5% discount' :
                (puAmount >= 500) ? amDis3 +', 7% discount' : puAmount +' without discount ';

    alert('amount to pay : ' + amoDis );
}