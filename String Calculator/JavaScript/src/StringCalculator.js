function StringCalculator(){
  this.add = function(numbers){
    if(numbers == "")
      return 0;
    return parseInt(numbers);
  }
}