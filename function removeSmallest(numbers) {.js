function removeSmallest(numbers) {
    let min = 0
    let output = []
    if(numbers == []){
        return numbers
    }
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < numbers[min]){
            min = i
        }        
    }
    for(let i = 0; i < numbers.length; i++){
        if(i !== min){
            output.push(numbers[i])
        }        
    }
  return output
  }