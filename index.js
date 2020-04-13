/* 
updateDriverWithKeyAndValue()- this function should take in three arguments: a driver Object, a key and a value. 
This function should not mutate the driver and should return a new driver that has an updated value for the key passed in.

destructivelyUpdateDriverWithKeyAndValue() - this function should work the same as updateDriverWithKeyAndValue() but it should mutate
 the driver parameter passed in.

deleteFromDriverByKey() - this function should take in a driver Object and a key. It should delete the key/value pair for the key that 
was passed in from the driver Object. This should all not actually mutate the driver passed in.

destructivelyDeleteFromDriverByKey() - this function should work the same as deleteFromDriverByKey() but it should mutate the driver passed
 in. Be sure and consider whether dot-notation or bracket-notation might affect your solution.
*/
let driver = {};
//change value of key w/o affecting original
function updateDriverWithKeyAndValue(obj, key, value) {
    let brandNew = { ...obj };
    brandNew[key] = value;
    return brandNew;
}
//change value of key with affecting original
function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}
//delete the item is given w/o affecting original
function deleteFromDriverByKey(obj, key) {
    let brandNew = { ...obj };
    delete brandNew[key];
    return brandNew;
}
//delete the item is given with affecting original
function destructivelyDeleteFromDriverByKey(obj, key, value) {
    delete obj[key];
    return obj;
}
