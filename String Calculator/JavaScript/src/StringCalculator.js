function StringCalculator(){
  this.add = function(numbers){
    var sum = 0;
    var parsedNumbers = numbers.split(/[,\n]/);
    parsedNumbers.forEach(function(number){
      if(number !== "")
        sum += parseInt(number);
    });
    return sum;
  }
}