function CoinChanger(amount, coins) {
  if (amount === 0) {
      return [];
  } else {
      if (amount >= coins[0]) {
          left = (amount - coins[0]);
          return [coins[0]].concat(CoinChanger(left, coins));
      } else {
          coins.shift();
          return CoinChanger(amount, coins);
      }
  }
}