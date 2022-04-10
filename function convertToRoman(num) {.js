function convertToRoman(num) {
    let newArr = []
    let numStr = num.toString()
    for(let i = 0; i < numStr.length; i++){
        newArr.push(numStr[i])        
    }   

    function lessThanHundred(param){
        let tenth
        switch(param){
            case '1': tenth = 'X';
                break;
            case '2': tenth = 'XX';
                break;
            case '3': tenth = 'XXX';
                break;
            case '4': tenth = 'XL';
                break;
            case '5': tenth = 'L';
                break;
            case '6': tenth = 'LX';
                break;
            case '7': tenth = 'LXX';
                break;
            case '8': tenth = 'LXXX';
                break;
            case '9': tenth = 'XC';
        }
        return tenth
    } 
    function lessThanTen(param){        
        let newNum
            switch(param){
            case '1': newNum = 'I';
                    break;
                case '2': newNum = 'II';
                    break;
                case '3': newNum = 'III';
                    break;
                case '4': newNum = 'IV';
                    break;
                case '5': newNum = 'V';
                    break;
                case '6': newNum = 'VI';
                    break;
                case '7': newNum = 'VII';
                    break;
                case '8': newNum = 'VIII';
                    break;
                case '9': newNum = 'IX';
    }    
        return newNum
}
     function lessThanThousand(param){
        let hundredth
        switch(param){
            case '1':  hundredth = 'C';
                break;
            case '2': hundredth = 'CC';
                break;
            case '3': hundredth = 'CCC';
                break;
            case '4': hundredth = 'CD';
                break;
            case '5': hundredth = 'D';
                break;
            case '6': hundredth = 'DC';
                break;
            case '7': hundredth = 'DCC';
                break;
            case '8': hundredth = 'DCCC';
                break;
            case '9': hundredth = 'CM';
        }
        return hundredth
    }
    function threeThousand(param){
        let thousand
        switch(param){
            case '1':  thousand = 'M';
                break;
            case '2': thousand = 'MM';
                break;
            case '3': thousand = 'MMM';                 
        }
        return thousand
    }
    if(newArr.length === 1){
    console.log(lessThanTen(newArr[0]))
} else if(newArr.length === 2){
    console.log(lessThanHundred(newArr[0]) + lessThanTen(newArr[1]))    
} else if(newArr.length === 3){
    console.log(lessThanThousand(newArr[0]) +
    lessThanHundred(newArr[1]) +
    lessThanTen(newArr[2]))
} else {
    console.log(threeThousand(newArr[0]) + (lessThanThousand(newArr[1]) +
    lessThanHundred(newArr[2]) +
    lessThanTen(newArr[3])))
}  
}
convertToRoman(3999)