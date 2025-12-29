/*

2. Longest Common Prefix


Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

*/





var longestCommonPrefix = (strs) => {

   
  if(strs.length === 0) return "";

  let prefix = "";

  for(let i = 0 ; i < strs[0].length ; i++){
      
        let char = strs[0][i]

        for(let j =  1 ; j < strs.length ; j++){

           
          if(i >= strs[j].length || strs[j][i] !== char){

                          return prefix

          }

         }

         prefix += char
   }

   
   return prefix
   
}



const testCases = [
  { strs : ["flower","flow","flight"]},
  {strs : ["dog","racecar","car"]}
]

console.log("-----------------")


testCases.forEach((test , index) => {

  const result = longestCommonPrefix(test.strs)

  console.log(`Example : ${index  + 1}`)
  console.log(`input strings  : ${JSON.stringify(test.strs)} `)
  console.log(`Output  : ${JSON.stringify(result)} `)

    console.log('------------------------');


})