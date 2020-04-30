// Write your solution in this file!

/*
Ddestructive method: is a method that modify the attribute of an object attribute (object parameter).
non-destructive method: is a method that do NOT modify the attribute of an object (object parameter).

destructive methods are ones that would modify the contents of the Map, that would be things like put, clear, or remove.
non-destructive methods are ones that only perform read operations, like get, containsKey, or containsValue.
*/


const driver = {};

// 1) "before each" hook for "returns a driver with the original key value pairs and the new key value pair"
// function nondestructivelyUpdateObject(obj, key, value)
function updateDriverWithKeyAndValue(driver, key, value) {
    const updateDriver = {...driver}  // or const updateDriver =  Object.assign({}, driver);
    updateDriver[key] = value;
    return updateDriver;
}

// 2) updates `driver` with the given `key` and `value` (it is destructive) and returns the entire updated driver
// function destructivelyUpdateObject (obj, key, value) 
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

// 3) deletes `key` from a clone of driver and returns the new driver (it is non-destructive)
// 4) does not modify the original driver (it is non-destructive)
function deleteFromDriverByKey(driver, key) {
    const deleteDriver = {...driver};  // or const deleteDriver =  Object.assign({}, driver);
    delete deleteDriver[key];
    return deleteDriver;
}

// 5) returns driver without the delete key/value pair
// 6) modifies the original driver
function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;    
}