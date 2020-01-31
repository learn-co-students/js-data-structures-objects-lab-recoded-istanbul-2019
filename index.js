const driver = {
    name:"Jhon",
    sex:"male",
    age:35,
    city:"istanbul"
  }
  
  function updateDriverWithKeyAndValue(obj,key,val){
      const newDriver = Object.assign({},obj);
      newDriver[key]=val;
      return newDriver
  }

 
function destructivelyUpdateDriverWithKeyAndValue(obj,key,val){
    obj[key]=val;
    return obj
}

function deleteFromDriverByKey(obj,key){
    const newDriver = {...obj};
    delete newDriver[key];
    return newDriver
}

function destructivelyDeleteFromDriverByKey(obj,key){
    delete obj[key];
    return obj
}