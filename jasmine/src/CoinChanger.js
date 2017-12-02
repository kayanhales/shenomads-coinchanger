function CoinChanger(amount, coins) {
  if (amount === 0) {
      return [];
  } else {
      if (amount >= coins[0]) {
          remainder = (amount - coins[0]);
          return [coins[0]].concat(CoinChanger(remainder, coins));
      } else {
          coins.shift();
          return CoinChanger(amount, coins);
      }
  }
}