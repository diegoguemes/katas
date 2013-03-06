describe('A String Calculator', function(){

  var calculator;

  beforeEach(function(){
    var factory = new StringCalculatorFactory();
    calculator = factory.create();
  });

  it("should return zero when adding an empty string", function(){
    var result = calculator.add("");
    expect(result).toBe(0);
  });

  it("should return the number when adding one number", function(){
    var result = calculator.add("10");
    expect(result).toBe(10);
  });

  it("should return the sum of numbers separated by colon", function(){
    var result = calculator.add("5,10,20,30");
    expect(result).toBe(65);
  });

  it("should allow sum the numbers separated by newline", function(){
    var result = calculator.add("5\n10\n20,30");
    expect(result).toBe(65);
  });

  it("should allow sum the numbers separated by custom separator", function(){
    var result = calculator.add("//;\n5;10;20;30");
    expect(result).toBe(65);
  });

  it("should throw error when adding negatives", function(){
    var addWithNegatives = function(){
      calculator.add("5,-10,-20,30");
    };
    expect(addWithNegatives).toThrow("Negatives not allowed: -10, -20");
  });

  it("should ignore numbers bigger than 1000", function(){
    var result = calculator.add("5,10,20,30,1000,1001,1002");
    expect(result).toBe(1065);
  });

  it("should allow to define custom delimiter of any length", function(){
    var result = calculator.add("//***\n5***10***20***30");
    expect(result).toBe(65);
  });

  it("should allow to define multiple delimiters", function(){
    var result = calculator.add("//[*][#]\n5*10#20,30");
    expect(result).toBe(65);
  });

  it("should allow to define multiple delimiters of any length", function(){
    var result = calculator.add("//[***][###]\n5***10###20,30");
    expect(result).toBe(65);
  });
});