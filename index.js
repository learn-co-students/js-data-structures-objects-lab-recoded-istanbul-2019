// Write your solution in this file!

const driver = { name: 'Sam', address: '11 Broadway' }

function updateDriverWithKeyAndValue(driver, key, value) {
    const obj = Object.assign({}, driver);
    obj[key] = value;
    return obj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    const obj = Object.assign({}, driver);
    delete obj[key];
    return obj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}