// Write your solution in this file!
const driver = {
    name: "Tugba",
    age: 30
}

function updateDriverWithKeyAndValue(driver, key, value) {
    
    const newDriver = Object.assign({}, driver, {[key]: value });
    return newDriver;
}



function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver
}
destructivelyUpdateDriverWithKeyAndValue(driver,"name", "tubi")
destructivelyUpdateDriverWithKeyAndValue(driver,"age", 31)

function deleteFromDriverByKey(driver, key) {
    const newDriver = Object.assign({}, driver);
    delete newDriver[key]
    return newDriver 
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}
