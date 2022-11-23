// Code your solution here
function findMatching(names,string){
return names.filter(names => names.toUpperCase() === string.toUpperCase())
}

function fuzzyMatch(names,string){
  return names.filter(names => names.startsWith(string))

}
function matchName(driver,string){
return driver.filter(driver => driver.name.includes(string))
}
