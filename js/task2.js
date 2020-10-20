function task2() {
    const A1 = +prompt('enter A1 :');
    const A2 = +prompt('enter A2 :');
    const A3 = +prompt('enter A3 :');
    const B1 = +prompt('enter B1 :');
    const B2 = +prompt('enter B2 :');
    const B3 = +prompt('enter B3 :');

        let prices = [A1, A2, A3];

        function sort(a, b) {
            if (a < b) {
                return 1;
            } else if (a >= b) {
                return -1;
            }
        }
        prices.sort(sort);
        A1 = prices[0];
        A2 = prices[1];
        A3 = prices[2];

        let capacities = [B1, B2, B3];
        capacities.sort(sort);
        B1 = capacities[0];
        B2 = capacities[1];
        B3 = capacities[2];
        const numAmount = A1 * B1 + A2 * B2 + A3 * B3;
        alert('you\'ll get sum = ' + numAmount);
}