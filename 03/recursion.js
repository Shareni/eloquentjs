function isEven(startingNumber){

    function makePositive(number){
        if (number >= 0){
            return number;
        }
        else if (number < 0){
            return number = (-(number));
        }
        else{
            console.log('not a number');
        }
    }

    function reducer(number){
        while (number > 1){
            number = number -2
        }
        return number;
    }

    let reduced = reducer(makePositive(startingNumber));

    if (reduced === 0){
        return true;
    }
    else if (reduced === 1){
        return false;
    }
}
