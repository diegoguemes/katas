function StringCalculator(numbersExtractor){
  this.add = function(numbers){
    var extractedNumbers = numbersExtractor.extract(numbers);
    return extractedNumbers.sum();
  }
}

function NumberExtractor(){
  var NUMBER_REGEX = /-?\d+/g;

  this.extract = function(numbers){
    var extractedNumbers = numbers.match(NUMBER_REGEX) || [];
    return extractedNumbers.map(function(number){
      return parseInt(number);
    });
  }
}

function NumberExtractorWithValidator(numbersExtractor, validator){
  this.extract = function(input){
    var numbers = numbersExtractor.extract(input);
    new validator.validateAndThrow(numbers);
    return numbers;
  };
}

function NumberExtractorWithFilter(numbersExtractor, filter){
  this.extract = function(numbers){
    var extractedNumbers = numbersExtractor.extract(numbers);
    return extractedNumbers.filter(filter);
  };
}

if(!Array.prototype.sum){
  Array.prototype.negatives = function(){
    var isNegative = function(number){
      return number < 0;
    };
    return this.filter(isNegative);
  };

  Array.prototype.sum = function(){
    var sum = 0;
    this.forEach(function(number){
      sum += number;
    });
    return sum;
  };
}

function NegativesValidator(){
  this.validateAndThrow = function(numbers){
    var negatives = numbers.negatives();
    if(negatives.length){
      throw "Negatives not allowed: " + negatives.join(", ");
    }
  }
}

