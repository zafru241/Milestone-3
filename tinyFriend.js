function tinyFriend(str){
    let wordsArr = str['karim','Rahi','Dhali', 'Tony', 'Joy'];
    let shortest = Infinity;
    // let shortest = wordsArr[0].length
    for(let i=0; i<wordsArr.length; i++){
        let wordLength = wordsArr[i].length;
        if(wordLength< shortest){
            shortest = wordLength;
        }
    }
    return shortest;
}
// let result = tinyFriend(['karim','Rahi','Dhali', 'Tony', 'Joy']);
console.log(shortest);