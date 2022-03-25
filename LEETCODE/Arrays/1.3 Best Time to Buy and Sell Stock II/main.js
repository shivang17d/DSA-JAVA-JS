var maxProfit = function(prices) {
    let net_profit = 0;
    for(let i = 1; i < prices.length ; i++){
        if(prices[i] > prices[i-1]){
            net_profit += prices[i] - prices[i-1];
        }
    }
    return net_profit;
};
