function StringCalculatorFactory(){
  this.create = function(){
    var builder = new StringCalculatorBuilder();
    return builder
      .withFilter(biggerThan(1000))
      .withValidator(negativesValidator())
      .build();
  };

  var biggerThan = function(limit){
    return function(number){
      return number <= limit;
    };
  };

  var negativesValidator = function(){
    return new NegativesValidator();
  };
}

function StringCalculatorBuilder(optNumberExtractor){
  var numberExtractor = optNumberExtractor || new NumberExtractor();

  this.withFilter = function(filter){
    return new StringCalculatorBuilder(new NumberExtractorWithFilter(numberExtractor, filter));
  };

  this.withValidator = function(validator){
    return new StringCalculatorBuilder(new NumberExtractorWithValidator(numberExtractor, validator));
  };

  this.build = function(){
    return new StringCalculator(numberExtractor);
  }
}