describe('fizzbuzz', function() {
  it('should print the numbers one to 100', function() {
    console.log = jasmine.createSpy("log")
    fizzbuzz()
    for (var number=1; number <= 100; number += 1) {
      expect(console.log).toHaveBeenCalledWith(number)
    }
    expect(console.log).toHaveBeenCalledWith(1)
  })
})