// Write your solution in this file!
const driver = {
  foo: "bar",
  broadway:"firsthand"
};

function updateDriverWithKeyAndValue(driver, key, value){
 return  Object.assign({}, driver, {[key]:value});
 
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  
  return Object.assign(driver, {[key]:value});
}

function deleteFromDriverByKey(driver, key){
 let newdriver =  Object.assign({}, driver);
  delete newdriver[key];
  return newdriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver
  
}