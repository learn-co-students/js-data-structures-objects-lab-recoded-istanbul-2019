// Write your solution in this file!
let driver = {
    home: 'yusra',
    area: 'balat'
};
function updateDriverWithKeyAndValue(object, key, value) {
    const newObj = { ...object };
    newObj[key] = value;
    return newObj;
}

let newDriver = updateDriverWithKeyAndValue(driver, 'home', 'my house');
//////----distructive-----/////

// let driver = {
//     home: 'yusra',
//     area: 'balat'
// };
function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
    
    object[key] = value;
    return object;
}

functiondestructivelyUpdateDriverWithKeyAndValue(driver, 'home', 'my house');
//---------non-destructive delete--------//
function deleteFromDriverByKey(object, key, value) {
    const newObj = Object.assign({}, object);
    delete newObj[key];
    return newObj
}
deleteFromDriverByKey(driver, 'home', 'yusra');

//---------destructive delete--------//
function destructivelyDeleteFromDriverByKey(object, key) {
    // const newObj = Object.assign({}, object);
    delete object[key];
    return object
}
destructivelyDeleteFromDriverByKey(driver, 'home');

