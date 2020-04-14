// Write your solution in this file!
let driver= {
  name:'tony',
  age:'20',
  fine: '100$'

}
function updateDriverWithKeyAndValue(obj,key,value){
  const newObj = { ...obj }; 
  newObj[key] = value;
return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(obj,key,value){
  obj[key] = value;

return obj;
}

function deleteFromDriverByKey(obj,key){
  let newObj = Object.assign({}, obj);
  delete newObj[key];
  return newObj;
  
}

function destructivelyDeleteFromDriverByKey(obj,key){
  delete obj[key]; 
  return obj;

}


updateDriverWithKeyAndValue(driver,'speed','100');
destructivelyUpdateDriverWithKeyAndValue(driver,'drunk','false');
deleteFromDriverByKey(driver, 'drunk');
destructivelyDeleteFromDriverByKey(driver,'drunk');