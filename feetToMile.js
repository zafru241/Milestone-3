function feetToMile(feet){
    return feet/5280;
}
function milesToFeet(mile){
    return Math.round(miles * 5280);
}
let result = feetToMile(5280);
console.log(result);