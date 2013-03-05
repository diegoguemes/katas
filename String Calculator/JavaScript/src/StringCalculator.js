function NumberExtractor(){
  this.extract = function(numbers){
    var extractedNumbers = numbers.match(/\d+/g) || [];
    return extractedNumbers.map(function(number){
      return parseInt(number);
    });
  }
}

function StringCalculator(numbersExtractor){
  var sum = function(numbers){
    var sum = 0;
    numbers.forEach(function(number){
      sum += number;
    });
    return sum;
  };

  this.add = function(numbers){
    var extractedNumbers = numbersExtractor.extract(numbers);
    return sum(extractedNumbers);
  }
}