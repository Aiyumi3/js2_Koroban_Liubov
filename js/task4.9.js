function task4_9() {
    const mark = 2;
    const strQA1 = prompt(' Q1: 12^2 ? \n  A: a. 144 \n b. 139 \n c.147 \n tap right answer :', ' ');
    switch (true) {
        case strQA1 == 'a' :
            alert('mark = '+ mark);
            break;
        case strQA1 == 'b' :
            alert('mark = 0, answer isn\'t right');
            break;
        case strQA1 == 'c' :
            alert('mark = 0, answer isn\'t right');
            break;
        default :
            alert(' error ');
    }
    const strQA2 = prompt(' Q2: 15^2 ? \n  A: a. 226 \n b. 230 \n c.225 \n tap right answer :', ' ');
    switch (true) {
        case strQA2 == 'a' :
            alert('mark = 0, answer isn\'t right');
            break;
        case strQA2 == 'b' :
            alert('mark = 0, answer isn\'t right');
            break;
        case strQA2 == 'c' :
            alert('mark = '+ mark);
            break;
        default :
            alert(' error ');
    }
    const strQA3 = prompt(' Q1: 19^2 ? \n  A: a. 344 \n b. 361 \n c.351 \n tap right answer :', ' ');
    switch (true) {
        case strQA3 == 'a' :
            alert('mark = 0, answer isn\'t right');
            break;
        case strQA3 == 'b' :
            alert('mark = '+ mark);
            break;
        case strQA3 == 'c' :
            alert('mark = 0, answer isn\'t right');
            break;
        default :
            alert(' error ');
    }
    alert((strQA1 == 'a' && strQA2 == 'c' && strQA3 == 'b') ? 'sum = 6' :
        ((strQA1 == 'a' && strQA2 == 'c' && strQA3 != 'b') || (strQA1 == 'a' && strQA2 != 'c' && strQA3 == 'b') ||
            (strQA1 != 'a' && strQA2 == 'c' && strQA3 == 'b')) ? 'sum = 4' :
            ((strQA1 != 'a' && strQA2 != 'c' && strQA3 == 'b') || (strQA1 != 'a' && strQA2 == 'c' && strQA3 != 'b') ||
                (strQA1 == 'a' && strQA2 != 'c' && strQA3 != 'b')) ? ' sum = 2 ' :
                (strQA1 != 'a' && strQA2 != 'c' && strQA3 != 'b') ? 'sum = 0' : 'error');
}