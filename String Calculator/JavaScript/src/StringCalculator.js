function NumberExtractor(){
  this.extract = function(numbers){
    var extractedNumbers = numbers.match(/\d+/g) || [];
    return extractedNumbers.map(function(number){
      return parseInt(number);
    });
  }
}

if(!Array.prototype.sum){
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
    return extractedNumbers.sum();
  }
}