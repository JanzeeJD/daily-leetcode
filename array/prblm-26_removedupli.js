const nums=[0,0,0,1,1,1,2,2,3,3,4,5,5]
function removeDuplicate(){
  let arr=[];
  let k
  for(i=1;i<nums.length;i++){
    if(nums[i]==nums[i-1]){
      k=nums[i-1]
      arr= nums.pop(k)
    }
    else{
      k=nums[i-1]
      arr= nums.push(k)
    }
  }
  return arr;
}
console.log(removeDuplicate())


let arr = arr.filter((elem, index) => arr.indexOf(elem) === index)