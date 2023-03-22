// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
//function filter(driver,name){
    //let newDriver=[]
    //for(let user of driver){
        //if(name(user)){
        //    newDriver.push(user)
      //  }
    //}
  //  return newDriver
//}
 function findMatching(drivers,name){
    return drivers.filter(driver=>(driver.toLowerCase()===name.toLowerCase()))

 }
 function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
  }

  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  