size = 8;
let board = ''

for (i=1; i <= size; i++){
    if (i % 2 != 0){
        for(r = 1; r <= size; r++){
            if(r % 2 != 0){
                board = board + '#';
            }else{
                board = board + ' ';
            }
        }
        board = board + '\n';
    }else{
        for(r = 1; r <= size; r++){
            if(r % 2 != 0){
                board = board + ' ';
            }else{
                board = board + '#';
            }
        }
        board = board + '\n';
    }
}

console.log(board);
