class Solution {
    public int maxProfit(int[] prices) {
        int min_price1 = Integer.MAX_VALUE;
        int profit1 = 0;
        int min_price2 = Integer.MAX_VALUE;
        int profit2 = 0;
        for(int i = 0 ; i < prices.length ; i++){
            min_price1 = Math.min(min_price1,prices[i]);
            profit1 = Math.max(profit1,prices[i] - min_price1);
            min_price2 = Math.min(min_price2,prices[i]-profit1);
            profit2 = Math.max(profit2,prices[i] - min_price2);  
        }
        return profit2;
    }
}
