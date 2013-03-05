function StringCalculator(){
  this.add = function(numbers){
    if(numbers == "")
      return 0;
    if(numbers.indexOf(",") == -1)
      return parseInt(numbers);
    var parsedNumbers = numbers.split(",");
    var sum = 0;
    parsedNumbers.forEach(function(number){
      sum += parseInt(number);
    });
    return sum;
  }
}