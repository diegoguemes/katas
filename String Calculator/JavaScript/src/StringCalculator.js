function StringCalculator(){
  this.add = function(numbers){
    var sum = 0;
    var parsedNumbers = numbers.split(",");
    parsedNumbers.forEach(function(number){
      if(number !== "")
        sum += parseInt(number);
    });
    return sum;
  }
}