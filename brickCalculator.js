function brickCalculator(floor){
    const brickPerFeet = 1000;
    let building = 0;
    if(floor<= 10){
        building = floor * 15 * brickPerFeet;
       
        }
        else if(floor<=20){
            let floor1 = 10 * 15 *brickPerFeet;
            let remainingFloor = floor-10;
            let floor2 = remainingFloor *12 * brickPerFeet;
            building = floor1 + floor2;
        }
        else{
            let floor1 =  10 * 15 *brickPerFeet;
            let floor2 = 10 * 12 * brickPerFeet;
            let remainingFloor = floor-20;
            let floor3 = remainingFloor * 10 * brickPerFeet;
            building = floor1 + floor2 + floor3;
        }   
        return building;  
}
let result = brickCalculator(22);
console.log(result);
   
