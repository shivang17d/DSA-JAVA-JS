var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0 ; i < nums.length; i++){
        
        let n1 = nums[i];
        let n2 = target - nums[i];
        
        if(map.has(n2)){
            return [i,map.get(n2)];
        }
        
        map.set(n1,i);
    }
};
