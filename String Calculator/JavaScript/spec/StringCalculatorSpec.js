describe('A String Calculator', function(){
  it("will return zero when adding empty string", function(){
    var calculator = new StringCalculator();
    var result = calculator.add("");
    expect(result).toBe(0);
  });
});