describe("fizzBuzz", function() {
  it ("prints fizz", function() {
    expect(fizzBuzz(3)).toEqual("Fizz");
  });

  it ("prints Buzz", function() {
    expect(fizzBuzz(5)).toEqual("Buzz");
  });

  it ("Prints Fizzbuzz", function () {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
  });
});
