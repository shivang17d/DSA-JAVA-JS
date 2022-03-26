var help = function(prices) {
    let net_profit = 0;
    for(let i = 1; i < prices.length ; i++){
        if(prices[i] > prices[i-1]){
            net_profit += prices[i] - prices[i-1];
        }
    }
    return net_profit;
};

var maxProfit = function(k, prices) {
    if(k <= 0 || prices.length <= 0){
        return 0;
    }
    if(k > prices.length/2){
        return help(prices);
    }
    let min_price = new Array(k).fill(Number.MAX_VALUE);
    let max_profit = new Array(k).fill(0);

    for(let i = 0 ; i < prices.length ; i++){
        for(let j = 0; j < k ; j++){
            min_price[j] = Math.min(min_price[j],prices[i]-(j>0 ? max_profit[j-1]:0));
            max_profit[j] = Math.max(max_profit[j],prices[i]-min_price[j]);        
        }
     }
    return max_profit[k-1];
};
