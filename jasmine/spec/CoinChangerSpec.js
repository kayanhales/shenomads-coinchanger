describe('CoinChanger', function () {
  it ('returns 1 penny for 1 penny', function () {
    expect(CoinChanger(1, [25,10,5,1])).toEqual([1])
  })

  it ('returns 3 pennies for 3', function () {
    expect(CoinChanger(3, [25,10,5,1])).toEqual([1, 1, 1])
  })

  it ('returns 1 nickel for 5', function () {
    expect(CoinChanger(5, [25,10,5,1])).toEqual([5])
  })

  it ('returns 1 dime for 10', function () {
    expect(CoinChanger(10, [25,10,5,1])).toEqual([10])
  })

  it ('returns 2 dimes for 20', function () {
    expect(CoinChanger(20, [25,10,5,1])).toEqual([10, 10])
  })

  it ('returns 1 quarter for 25', function () {
    expect(CoinChanger(25, [25,10,5,1])).toEqual([25])
  })

  it ('returns 2 quarters for 50', function () {
    expect(CoinChanger(50, [25,10,5,1])).toEqual([25, 25])
  })

  it ('returns 3 quarters for 75', function () {
    expect(CoinChanger(75, [25,10,5,1])).toEqual([25, 25, 25])
  })

  it ('returns 2 dimes and 4 pennies for 24', function () {
    expect(CoinChanger(24, [25,10,5,1])).toEqual([10, 10, 1, 1, 1, 1])
  })

  it ('returns 3 quarters, 2 dimes, and 4 pennies for 99', function () {
    expect(CoinChanger(99, [25,10,5,1])).toEqual([25, 25, 25, 10, 10, 1, 1, 1, 1])
  })
})
