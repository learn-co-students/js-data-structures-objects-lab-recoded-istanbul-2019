// Write your solution in this file!
let driver = {};



//should take in three arguments: a driver Object, a key and a value. 
//This function should not mutate the driver and should return a new 
//driver that has an updated value for the key passed in.
function updateDriverWithKeyAndValue(object, key, value) {
    // return Object.assign({}, object, {[key]: value});
    let newObj = {...object};
    newObj[key] = value;
    return newObj;
};

//should work the same as updateDriverWithKeyAndValue() 
//but it should mutate the driver parameter passed in.
function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
};


//should take in a driver Object and a key. It should delete 
//the key/value pair for the key that was passed in from the driver Object. 
//This should all not actually mutate the driver passed in.
function deleteFromDriverByKey(object, key) {
    let newObj = {...object};
    delete newObj[key];
    return newObj;
};


//should work the same as deleteFromDriverByKey() but it should mutate 
//the driver passed in. Be sure and consider whether dot-notation or 
//bracket-notation might affect your solution.
function destructivelyDeleteFromDriverByKey(object, key) {
    delete object[key];
    return object;
};