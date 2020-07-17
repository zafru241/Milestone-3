function brickCalculator(floor){
    const brickPerFeet = 1000;
    let floor1 = 10;
    let floor2 = 10;
    let floor3 = 10;
    if(floor<= 10){
        floor1 = brickPerFeet * 15 * floor;
        return floor1;
        }
        else if(floor<=11){
            floor2 = brickPerFeet * 12 * floor;
            return floor1 + floor2;
        }
        else if(floor<=21){
            floor3 = brickPerFeet * 10 * floor;
            return floor1 + floor2 + floor3;
        }     
}

   
