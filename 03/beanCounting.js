function countChar(string, char){
    let result = 0;
    let letters = string.length;
    for (letters; letters > -1; letters--){
        if (string[letters] === char){
            result++;
        }
    }
    return result;
}

function countBs(string) { return countChar(string, "B"); }
