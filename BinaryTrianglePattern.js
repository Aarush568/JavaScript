function binaryTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += (i + j) % 2 + ' ';
        }
        console.log(row);
    }
}

binaryTriangle(5);
