// Write your solution in this file!
let driver = {}

let newdriver ={}

//------- Functions ---------

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {[key]: value});
    
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    let newdriver = Object.assign({}, driver);
    delete newdriver.name;
    return newdriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver.name;
    return driver;
}