for (i = 1; i <= 100; i++){
    let output = '';
    if (i % 3 === 0){
        output = output + 'Fizz'
    }
    if (i % 5 ===  0){
        output = output + 'Buzz';
    }
    if (i % 3 !== 0 && i % 5 !== 0){
        output = i;
    }
    console.log(output);
}

/* sa || nekako? i%3 || i%5 -> i%5 || i
 * !(i%3===0 || i%5===0)*/
