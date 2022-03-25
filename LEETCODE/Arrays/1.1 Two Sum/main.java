class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] result = new int[2];
        HashMap<Integer,Integer>H = new HashMap<>();
        for(int i = 0 ; i < nums.length; i++)
        {
            int comp = target-nums[i];
            if(H.containsKey(comp))
            {
                result[0] = H.get(comp);
                result[1] = i;
            }
            else
            {
                H.put(nums[i],i);
            }
        }
        return result;
    }
}
