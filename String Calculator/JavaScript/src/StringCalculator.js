function StringCalculator(){
  this.add = function(numbers){
    if(numbers == "")
      return 0;
    if(numbers.indexOf(",") == -1)
      return parseInt(numbers);
    var parsedNumbers = numbers.split(",");
    return parseInt(parsedNumbers[0]) + parseInt(parsedNumbers[1]);
  }
}