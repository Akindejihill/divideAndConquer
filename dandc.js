//Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

//strategy is to find the first occuranse of zero, and return the amount of elements
//from that index to the end of the array.
function countZeroes(given){
    let leftIndex = 0;
    let rightIndex = given.length - 1;    

    //check if the last element has a one.  If so then there are no
    //zeros, return 0
    if (given[given.length - 1] === 1){
        return 0;
    }

    //check if the first element has a 0.  If so then they are all 
    //zeroes, return the length
    if (given[0] === 0){
        return given.length;
    }

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        let middleValue = given[middleIndex];

        if(middleValue === 1){
            if(given[middleIndex + 1] === 0){
                //we found the first occurance of 0
                //return number of elements from here to end
                const here = middleIndex + 1;
                const count = given.length - here;
                return count;

            } else {
                leftIndex = middleIndex;
            } 

        } else if (middleValue === 0) {
            if (given[middleIndex - 1] === 1){
                //we found the first occurnace of 0
                //return number of elements from here to end
                const count = given.length - middleIndex;
                return count;
            } else {
                rightIndex = middleIndex;
            }
        }
    }
}





/**
 * 
 * @param {*} arr 
 * @param {*} num 
 * @returns 
 */
function sortedFrequency(arr, num) {
    let firstIdx = findFirst(arr, num); //find the first occurance of num
    if (firstIdx === -1) return -1;
    let lastIdx = findLast(arr, num); //find the last occurance of num
    return lastIdx - firstIdx + 1;
  }
  
  /**
   * Find the first occurance of num
   * @param {*} arr 
   * @param {*} num 
   * @param {*} low 
   * @param {*} high 
   * @returns 
   */

  function findFirst(arr, num, low = 0, high = arr.length - 1) {
    if (high >= low) {
      let mid = Math.floor((low + high) / 2)
      //if there are no more numbers or mid is the first occurance, return mid
      if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
        return mid;
      } else if (num > arr[mid]) {       //if num is higher then repeat the proccess disregarding elements to the left
        return findFirst(arr, num, mid + 1, high)
      } else {                                //otherwise repeat the procces disregarding elements to the right.  
        return findFirst(arr, num, low, mid - 1)    
      }
    }
    return -1
  }
  
  /**
   * Find the last occurance of num
   * @param {*} arr 
   * @param {*} num 
   * @param {*} low 
   * @param {*} high 
   * @returns 
   */
  function findLast(arr, num, low = 0, high = arr.length - 1) {
    if (high >= low) {
      let mid = Math.floor((low + high) / 2)
      //if there are no more numbers or mid is the last occurance, return mid
      if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
        return mid;
      } else if (num < arr[mid]) { //if num is lower then repeat the proccess disregarding elements to the right
        return findLast(arr, num, low, mid - 1)
      } else {                     //otherwise repeat the procces disregarding elements to the left.  
        return findLast(arr, num, mid + 1, high)
      }
    }
    return -1
  }

  
  module.exports = {countZeroes, sortedFrequency}