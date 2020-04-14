// Write your solution in this file!

let driver = {address: 'istanbul', area: 'kadikoy'};
function updateDriverWithKeyAndValue(object, key, value) {
    const newObj = { ...object };
    newObj[key] = value;
    return newObj;
}
let newDriver = updateDriverWithKeyAndValue(driver, 'address', 'my area');
function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
}
functiondestructivelyUpdateDriverWithKeyAndValue(driver, 'address', 'my area');
function deleteFromDriverByKey(object, key, value) {
    const newObj = Object.assign({}, object);
    delete newObj[key];
    return newObj
}
deleteFromDriverByKey(driver, 'area', 'address');
function destructivelyDeleteFromDriverByKey(object, key) {
    delete object[key];
    return object
}
destructivelyDeleteFromDriverByKey(driver, 'address');