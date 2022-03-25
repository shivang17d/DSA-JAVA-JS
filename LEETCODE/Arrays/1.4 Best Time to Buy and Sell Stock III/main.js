var maxProfit = function(prices) {
    let min_price1 = Number.MAX_VALUE;
    let profit1 = 0;
    let min_price2 = Number.MAX_VALUE;
    let profit2 = 0;
    for(let i = 0 ; i < prices.length ; i++){
        min_price1 = Math.min(prices[i],min_price1);
        profit1 = Math.max(profit1, prices[i] - min_price1);
        min_price2 = Math.min(prices[i]-profit1,min_price2);
        profit2 = Math.max(profit2, prices[i] - min_price2);
    }
    return profit2;
};
