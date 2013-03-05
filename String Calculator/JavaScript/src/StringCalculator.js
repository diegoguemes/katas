function NumberExtractor(){
  this.extract = function(numbers){
    var extractedNumbers = numbers.match(/\d+/g) || [];
    return extractedNumbers.map(function(number){
      return parseInt(number);
    });
  }
}

function StringCalculator(numbersExtractor){
  this.add = function(numbers){
    var extractedNumbers = numbersExtractor.extract(numbers);
    var sum = 0;
    extractedNumbers.forEach(function(number){
      sum += number;
    });
    return sum;
  }
}