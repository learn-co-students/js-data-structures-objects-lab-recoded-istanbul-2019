// Write your solution in this file!
const driver = {
    name: "sam"

};

// function updateDriverWithKeyAndValue(driver, key, value){
// return newDriver = Object.assign({}, driver, {[key] : value});
// }

function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = { ...driver };

    newDriver[key] = value;

    return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {

    driver[key] = value;

    return driver;
}

function deleteFromDriverByKey(driver, key) {
    const newdriver = Object.assign({}, driver);
    delete newdriver[key];
    return newdriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;

}