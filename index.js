// Write your solution in this file!
const driver = {
    ammar: 'BMW',
    hakan: 'toros'
};
// console.log(driver);

function destructivelyUpdateDriverWithKeyAndValue(driver, hakan, toros) {
  driver[hakan]= toros;
  return driver;
}
destructivelyUpdateDriverWithKeyAndValue(driver, 'hakan', 'sahin');

// console.log(driver);

function updateDriverWithKeyAndValue (obj, key, value){
  const newObj = {...obj};
  newObj[key]=value;
  return newObj;
}
// const newDrivers = nonDestructiveUpdateDrivupdateDriverWithKeyAndValueerWithKeyAndValue (driver, 'halit', 'merdeces');

// console.log(newDrivers);

function destructivelyDeleteFromDriverByKey(obj, key) {
    delete obj[key];
    return obj;
    }

    // deleteFromDriverByKey(driver, 'ammar')
    // console.log(driver);

    function deleteFromDriverByKey(obj, key) {
        const newObj = {...obj};
        delete newObj[key];
        return newObj;
        }