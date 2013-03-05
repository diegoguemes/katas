describe('A String Calculator', function(){
  var calculator;
  beforeEach(function(){
    calculator = new StringCalculator();
  });

  it("should return zero when adding an empty string", function(){
    var result = calculator.add("");
    expect(result).toBe(0);
  });

  it("should return the number when adding one number", function(){
    var result = calculator.add("10");
    expect(result).toBe(10);
  });

  it("should return the sum numbers separated by colon", function(){
    var result = calculator.add("5,10,20,30");
    expect(result).toBe(65);
  });
});