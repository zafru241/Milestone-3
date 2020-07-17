function woodCalculator(chair, table, bed){
    let chairCount = chair * 1;
    let tableCount = table * 3;
    let bedCount = bed * 5;
    let totalWood= chairCount + tableCount + bedCount ;
    return totalWood;
}
let woodResult = woodCalculator(2, 3, 5);
console.log(woodResult);
