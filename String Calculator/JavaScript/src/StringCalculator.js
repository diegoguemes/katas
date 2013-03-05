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

function StringCalculator(numbersExtractor){
  this.add = function(numbers){
    var extractedNumbers = numbersExtractor.extract(numbers);
    var negatives = extractedNumbers.negatives();
    if(negatives.length){
      throw "Negatives not allowed: " + negatives.join(", ");
    }
    return extractedNumbers.sum();
  }
}