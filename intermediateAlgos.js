
//Finding the max character the only issue is if there is a two characters with the same amount 
//If that occurs the code runs fine but will always return the first of those two or three or n... 

function maxChar(str){
    // create an object for a data structure to house the characters with their respective totals
    const charMap = {}
    // create variables to later return the most common character with the max number of characters
    let max = 0 
    let maxCharacter = ''
    //loop through the characters in the string and if not the object send to to the object and assign it to 1
    // if it is in the object then we increment it by 1 
    for(let char of str){
        charMap[char] =  ++charMap[char]  ||  1 
    }
  
  // once we have the data structure we destructure it and compare the max amount 
  // if the value at the current index is greater than the current set value 
  // reassign the current set value to the current index in the loop and assign the maxCharacter variable to the current key
    for (const [key, value] of Object.entries(charMap)){
     if(value > max){
      max = value
      maxCharacter = key
     }
    }
    //return the most common character witht the total amount 
    return `Most common character is ${maxCharacter} with a total amount of ${max}`
  }
  
  
  function maxChar2(str){
    // create an object for a data structure to house the characters with their respective totals
    const charMap = {}
    // create variables to later return the most common character with the max number of characters
    let max = 0 
    let maxCharacter = ''
    //loop through the characters in the string and if not the object send to to the object and assign it to 1
    // if it is in the object then we increment it by 1 
    for(let char of str){
      if(charMap[char]){
        charMap[char] = charMap[char] +1
      }else{
        charMap[char] = 1
      }
    }
  
  // once we have the data structure we destructure it and compare the max amount 
  // if the value at the current index is greater than the current set value 
  // reassign the current set value to the current index in the loop and assign the maxCharacter variable to the current key
    for (let key in charMap){
     if(charMap[key] > max){
      max = charMap[key]
      maxCharacter = key
     }
    }
    //return the most common character witht the total amount 
    return `Most common character is ${maxCharacter} with a total amount of ${max}`
  }
  
  console.log(maxChar('abbbbbbccccccd'))
  console.log(maxChar2('abbbbbbbbccccccd'))
  3
  
  
  
  
  
  // write a function that accepts a string. The function should 
  // capatalize the first letter of each word in the string then 
  // return the capatalized string 
  
  function capatlize(str){
  
  let arrayOfStrings = str.split(' ')
  arrayOfStrings = arrayOfStrings.map((x) => x.charAt(0).toUpperCase() + x.slice(1))
  return arrayOfStrings.join(' ')
  
  }
  
  function capatlize2(str){
  
  const arrayOfStrings = str.split(' ')
  for(let i = 0; i<= arrayOfStrings.length-1; i++){
  arrayOfStrings[i] = arrayOfStrings[i].charAt(0).toUpperCase()  + arrayOfStrings[i].slice(1)
  }
  
  return arrayOfStrings.join(' ')
  
  }
  
  
  
  Logger.log(capatlize("This is a Test to see if My function woks"))
  Logger.log(capatlize2("This is a the second test to see if My function woks"))
  
  