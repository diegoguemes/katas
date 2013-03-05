function StringCalculator(){
  this.add = function(numbers){
    var sum = 0;
    var parsedNumbers = numbers.match(/\d+/g) || [];
    parsedNumbers.forEach(function(parsedNumber){
      sum += parseInt(parsedNumber);
    });
    return sum;
  }
}