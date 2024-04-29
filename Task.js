// ___________________________________________________________________________________________________________________

// Question no 1//
// function maxProduct(nums) {
//     let maximum = nums[0];
//     let min = nums[0];
//     let result = nums[0];
  
//     for (let i = 1; i < nums.length; i++) {
//       let valMax = Math.max(nums[i], maximum * nums[i], min * nums[i]);
//       let valMin = Math.min(nums[i], maximum * nums[i], min * nums[i]);
  
//       maximum = valMax;
//       min = valMin;
  
//       result = Math.max(result, maximum);
//     }
  
//     return result;
//   }
//   let nums = [2, 3, -2, 4];
//   console.log(maxProduct(nums)); 

//   Question  no 2 //

// function twoSum(nums, target) {
//     const numMap = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
//         if (numMap.has(complement)) {
//             return [numMap.get(complement), i];
//         }
//         numMap.set(nums[i], i);
//     }
//     return null;
// }
// const nums1 = [2, 7, 11, 15];
// const target1 = 9;
// console.log(twoSum(nums1, target1));



//  Question  no 3 //
// function reverseWords(input) {
//     return input.split(' ').map(word => word.split('').reverse().join('')).join(' ');
// }

// let inputString = "Welcome to this Javascript Guide!";
// let reversedString = reverseWords(inputString);
// console.log(reversedString);

//  Question  no 4 // 

// var library = [
//     {
//       title: "The Road Ahead",
//       author: "Bill Gates",
//       readingStatus: true
//     },
//     {
//       title: "Walter Isaacson",
//       author: "Steve Jobs",
//       readingStatus: true
//     },
//     {
//       title: "Mockingjay: The Final Book of The Hunger Games",
//       author: "Suzanne Collins",
//       readingStatus: false
//     }
//   ];
  
//   for (var i = 0; i < library.length; i++) {
//     var book = library[i];
//     if (book.readingStatus) {
//       console.log("Already read '" + book.title + "' by " + book.author + ".");
//     } else {
//       console.log("Still read '" + book.title + "' by " + book.author + ".");
//     }
//   }



    //  Question  no 5 // 

    // function amountToCoins(amount, coins) {
    //     const result = [];
      
    //     for (let coin of coins) {
    //       while (amount >= coin) {
    //         amount -= coin;
    //         result.push(coin);
    //       }
    //     }
      
    //     return result;
    //   }
    //   let amount = 46;
    //   let coins = [25, 10, 5, 1];
    //   let coinBreakdown = amountToCoins(amount, coins);
    //   console.log(coinBreakdown); 
      