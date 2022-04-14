function checkCashRegister(price, cash, cid) {
    let difference = cash - price 
    let bank =0
    for(let i = 0; i < cid.length; i++){
        bank+=cid[i][1]
        console.log(bank)
    }    
    if(difference > bank){
        return {
            status: "INSUFFICIENT_FUNDS", 
            change: []
        }
    }
    if(difference == bank){
        return {
            status: "CLOSED",
            change: cid
        }
    }
    if(bank > difference){}
}
    let pennies = cid[0][1] * 100
    let nickels = cid[1][1] / 5
    let dimes = cid[2][1] / 10
    let quarters = cid[3][1] / 25
    let ones = cid[4][1]
    let fives = cid[5][1] / 5
    let tens = cid[6][1] / 10
    let twenties = cid[7][1] / 20
    let hundreds = cid[8][1] / 100

function convertMoney(cid){        
    for(let i = 0; i < cid.length; i++){
        switch(cid[i][0]){
            case "PENNY": pennies = cid[i][1] * 100;
            case "NICKEL": nickels = (cid[i][1] / 5) * 100;
            case "DIME": dimes = (cid[i][1] /10) * 100;
            case "QUARTER": quarters = (cid[i][1] / 25) * 100;
            case "ONE": ones = cid[i][1];
            case "FIVE": fives = cid[i][1] / 5;
            case "TEN": tens = cid[i][1] / 10;
            case "TWENTY": twenties = cid[i][1] / 20;
            case "ONE HUNDRED": hundreds = cid[i][1] / 100;
        }
    }
    
    console.log(pennies, nickels, dimes, quarters, ones, fives, tens, twenties, hundreds)
}

function findSolution(difference) {
    function find(current, history) {
      if (current == difference) {
        return history;
      } else if (current > difference) {
        return null;
      } else {
        return find(current + .01, `(${history} + .01)`) ||
               find(current + .05, `(${history} + .05)`) ||
               find(current + .10, `(${history} + .10)`) ||
               find(current + .25, `(${history} + .35)`) ||
               find(current + 1, `(${history} + 1)`) ||
               find(current + 5, `(${history} + 5)`) ||
               find(current + 10, `(${history} + 10)`) ||
               find(current + 20, `(${history} + 20)`) ||
               find(current + 100, `(${history} + 100)`)
      }
    }
    return find(1, "1");
  }
  
  console.log(findSolution(24));

  
checkCashRegister(19.5, 20, [
    ["PENNY", 0.01], 
    ["NICKEL", 0], 
    ["DIME", 0], 
    ["QUARTER", 0], 
    ["ONE", 1], 
    ["FIVE", 0], 
    ["TEN", 0], 
    ["TWENTY", 0], 
    ["ONE HUNDRED", 0]
])

checkCashRegister(3.26, 100, 
    [["PENNY", 1.01], 
    ["NICKEL", 2.05], 
    ["DIME", 3.1], 
    ["QUARTER", ], 
    ["ONE", 90], 
    ["FIVE", 55], 
    ["TEN", 20], 
    ["TWENTY", 60], 
    ["ONE HUNDRED", 100]
]) 

