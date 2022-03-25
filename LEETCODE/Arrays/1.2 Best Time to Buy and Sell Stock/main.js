var maxProfit = function(prices) {
    let min_price = Number.MAX_VALUE;
    let profit = 0;
    
    for(let i = 0 ; i < prices.length ; i++){
        min_price = Math.min(prices[i],min_price);
        profit = Math.max(profit, prices[i] - min_price);
    }
    return profit;
    
};
