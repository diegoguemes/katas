function NumberExtractor(){
  this.extract = function(numbers){
    var extractedNumbers = numbers.match(/-?\d+/g) || [];
    return extractedNumbers.map(function(number){
      return parseInt(number);
    });
  }
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

function NumberExtractorWithNegativesValidator(numbersExtractor){

  var throwIfContainsNegatives = function(numbers){
    var negatives = numbers.negatives();
    if(negatives.length){
      throw "Negatives not allowed: " + negatives.join(", ");
    }
  };

  this.extract = function(numbers){
    var extractedNumbers = numbersExtractor.extract(numbers);
    throwIfContainsNegatives(extractedNumbers);
    return extractedNumbers;
  };
}

function NumberExtractorWithBiggerThanFilter(numbersExtractor){

  var biggerThan = function(limit){
    return function(number){
      return number <= limit;
    }
  };

  this.extract = function(numbers){
    var extractedNumbers = numbersExtractor.extract(numbers);
    return extractedNumbers.filter(biggerThan(1000));
  };
}

function StringCalculator(numbersExtractor){

  this.add = function(numbers){
    var extractedNumbers = numbersExtractor.extract(numbers);
    return extractedNumbers.sum();
  }
}