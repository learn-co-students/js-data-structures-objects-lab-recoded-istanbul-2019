// Write your solution in this file!
const driver = { b1: 'asd', b2: 'asdd', b3: 'asdsad' };

const updateDriverWithKeyAndValue = (driver, key, value) => {
  const newObj = { ...driver };
  newObj[key] = value;

  return newObj;
}
const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
  driver[key] = value;

  return driver;
}
const deleteFromDriverByKey = (driver, key) => {
  const newObj = { ...driver };
  delete newObj[key];
  return newObj;
}
const destructivelyDeleteFromDriverByKey = (driver, key) => {
  delete driver[key];
  return driver;
}
