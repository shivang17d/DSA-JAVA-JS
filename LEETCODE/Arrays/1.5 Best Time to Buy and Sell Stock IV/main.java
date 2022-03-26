class Solution {
    
    public int help(int[] prices){
        int net_profit = 0;
        for(int i = 1 ; i < prices.length ; i++){
            if(prices[i] > prices[i-1]){
                net_profit += prices[i] - prices[i-1];
            }
        }
        return net_profit;
    }
    
    public int maxProfit(int k, int[] prices) {
        
        if(k <= 0 || prices.length <= 0){
            return 0;
        }
        
        if(k > prices.length/2){
            return help(prices);
        }
        
        int[] min_price = new int[k];
        Arrays.fill(min_price ,Integer.MAX_VALUE);
        
        int[] max_profit = new int[k];
        Arrays.fill(max_profit ,0);
        
        for(int i = 0 ; i < prices.length ; i++){
            
            for(int j = 0; j < k ; j++){
                min_price[j] = Math.min(min_price[j],prices[i]-(j>0 ? max_profit[j-1]:0));
                max_profit[j] = Math.max(max_profit[j],prices[i]-min_price[j]);        
            }
            
        }
        
        return max_profit[k-1];                                                 
    }
}
