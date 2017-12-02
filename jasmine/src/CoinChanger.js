function CoinChanger(amount) {
  var returnAmount = [], total = 0;
  [25, 10, 5, 1].forEach(function(coin) {
    while (total + coin <= amount) {
      returnAmount.push(coin);
      total += coin;
    }
  });
  return returnAmount;
};

/*function CoinChanger(amount){
  var returnAmount = [], total = 0;
  [25,10,5,1].forEach(function(coin){
    if (amount >= coin){
      returnAmount=[coin]*(amount/coin);
    }
    amount=amount-(coin*(amount/coin));
  });
  return returnAmount;
};*/