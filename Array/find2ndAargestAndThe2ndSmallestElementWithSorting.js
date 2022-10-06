let numbersList=[] ;
for (let i = 0; i < 10; i++) {
    numbersList.push(Math.floor(Math.random() * 1000));
}
console.log(numbersList);
numbersList.sort();
console.log("second smallest number: ",numbersList[1]);
console.log("second largest number: ",numbersList[numbersList.length-2]);