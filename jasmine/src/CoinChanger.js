function CoinChanger(amount) {
  var change = [], total = 0;
  [25, 10, 5, 1].forEach(function(coin) {
    while (total + coin <= amount) {
      change.push(coin);
      total += coin;
    }
  });
  return change;
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