describe('fizzbuzz', function() {
  it('should print the numbers one to 100', function() {
      expect(fizzbuzz(2)).toEqual(2)
  })

  it('should print fizz when divisible by 3', function() {
    expect(fizzbuzz(3)).toEqual('fizz')
  })

  it('should print fizz when divisible by 3', function() {
    expect(fizzbuzz(5)).toEqual('buzz')
  })
})
