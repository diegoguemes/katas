describe('A String Calculator', function(){
  it("should return zero when adding an empty string", function(){
    var calculator = new StringCalculator();
    var result = calculator.add("");
    expect(result).toBe(0);
  });

  it("should return the number when adding one number", function(){
    var calculator = new StringCalculator();
    var result = calculator.add("10");
    expect(result).toBe(10);
  });
});