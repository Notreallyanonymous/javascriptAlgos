// reverse a string
function reverse(str){
    return str.split('').reverse().join('')
  }
  
  
  function reverse2(str2){
    let holdingArray = []
    for(let i = 0; i<= str2.length-1;i++){
      holdingArray.push(str2[str2.length-1 - i ])
    }
  
    return holdingArray.join('')
  }
  
  function reverse3(str3){
  
    let reverse = '';
  
    for(let char of str3){
      reverse = char + reverse
    }
  
    return reverse
  }
  
  
  
  // reverse an integer 
  
  
  function reverseInteger(number){
    let reverseInteger =  String(Math.abs(number)).split('').reverse().join('')
    reverseInteger =  Number(reverseInteger)
    return number < 0 ? -reverseInteger : reverseInteger
  }
  
  function reverseInteger2(number){
    let integer = [] ; 
    let reverseNumber = String(Math.abs(number))
    for(let i = 0; i<= reverseNumber.length-1;i++){
      integer.push(reverseNumber[reverseNumber.length-1] - i)
    }
  
    integer = Number(integer.join(''))
    return number < 0 ? -integer : integer
  }
  
  
  function reverseInteger3(number){
    const reverse = number.toString().split('').reverse().join('')
    return parseInt(reverse) * Math.sign(number)
  }
  
  
  
  
  // Palindromes 
  
  
  function isPalindrome(testString){
    let counter = 0 
    let reverse = testString.split('').reverse().join('')
    for(let i = 0; i<= testString.length-1;i++){
      if (reverse[i] === testString[i]){
        counter++
      } 
    }
  
    return counter === testString.length ?  true : false
  
  }
  
  
  function isPalindrome2(testString){
    let array = []
    array.push(testString.split('').reverse().join(''))
    return array.indexOf(testString) === -1 ? false : true
  }
  
  function isPalindrome3(testString){
    const reversed = testString.split('').reverse().join('')
    if(testString === reversed){
      return true 
    }else{
      return false
    }
  }
  
  
  
  
  
  
  
  
  
  //Finding the max character the only issue is if there is a two characters with the same amount 
  //If that occurs the code runs fine but will always returnt the first of those two or three or n... 
  
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
  
  
  
  
  
  
  
  
  
  