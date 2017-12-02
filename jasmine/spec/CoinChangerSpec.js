describe('CoinChanger', function () {
  it ('returns 1 penny for 1', function () {
    expect(CoinChanger(1, [25,10,5,1])).toEqual([1])
  })

  it ('returns 3 pennies for 3', function () {
    expect(CoinChanger(3, [25,10,5,1])).toEqual([1, 1, 1])
  })

  it ('returns 1 nickel for 5', function () {
    expect(CoinChanger(5, [25,10,5,1])).toEqual([5])
  })

  it ('returns 5 pennies for 5', function () {
    expect(CoinChanger(5, [1])).toEqual([1,1,1,1,1])
  })

  it ('returns 1 dime for 10', function () {
    expect(CoinChanger(10, [25,10,5,1])).toEqual([10])
  })

  it ('returns 2 nickels for 10', function () {
    expect(CoinChanger(10, [5,1])).toEqual([5,5])
  })

  it ('returns 2 dimes for 20', function () {
    expect(CoinChanger(20, [25,10,5,1])).toEqual([10,10])
  })

  it ('returns 4 nickels for 20', function () {
    expect(CoinChanger(20, [5,1])).toEqual([5,5,5,5])
  })

  it ('returns 1 quarter for 25', function () {
    expect(CoinChanger(25, [25,10,5,1])).toEqual([25])
  })

  it ('returns 2 dimes and a nickel for 25', function () {
    expect(CoinChanger(25, [10,5,1])).toEqual([10,10,5])
  })

  it ('returns 2 quarters for 50', function () {
    expect(CoinChanger(50, [25,10,5,1])).toEqual([25, 25])
  })

  it ('returns 5 dimes for 50', function () {
    expect(CoinChanger(50, [10,5,1])).toEqual([10,10,10,10,10])
  })

  it ('returns 3 quarters for 75', function () {
    expect(CoinChanger(75, [25,10,5,1])).toEqual([25, 25, 25])
  })

  it ('returns 7 dimes and a nickel for 75', function () {
    expect(CoinChanger(75, [10,5,1])).toEqual([10,10,10,10,10,10,10,5])
  })

  it ('returns 2 dimes and 2 pennies for 22', function () {
    expect(CoinChanger(22, [25,10,5,1])).toEqual([10, 10, 1, 1])
  })

  it ('returns 5 nickels and 2 pennies for 22', function () {
    expect(CoinChanger(22, [5,1])).toEqual([5,5,5,5, 1, 1])
  })

  it ('returns 4 quarters, 2 dimes, and 4 pennies for 124', function () {
    expect(CoinChanger(124, [25,10,5,1])).toEqual([25, 25, 25, 25, 10, 10, 1, 1, 1, 1])
  })
})
