//first
const driver = { 
    name: 'Sam'
}; 
//function to update 
function updateDriverWithKeyAndValue(driver, key, value){
    return Object.assign({}, driver,{[key]:value});
}
//implement
const newDriver= updateDriverWithKeyAndValue(driver,'address', '11 Broadway');

//second function - destructive

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key]=value; 
    return driver;
}
driver=destructivelyUpdateDriverWithKeyAndValue(driver,'address','12 Broadway')


//third function - nondestructive
//takes driver Object and key - delete key/value pair for the key passed in form of driver object - DOES NOT MUTATE DRIVER PASSED In
//deletes key from clone of a driver
function deleteFromDriverByKey(driver, key){
let newdriver=Object.assign({},driver);     //shallow copy all content - both refer to same place 
delete newdriver[key];
return newdriver;
}

//fourth function - destructive :)
function destructivelyDeleteFromDriverByKey(driver, key){
delete driver.name;     //we want to delete actual content of driver ? 
return driver;
}