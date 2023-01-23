const leapYears = function(yr) {
    //determine if year is a leap year
    //if year is divisible by 4, it is a leap year
    //if year is divisible by 100, it is not a leap year
    //if year is divisible by 400, it is a leap year
    if(yr % 4 === 0){
        if(yr % 100 === 0){
            if(yr % 400 === 0){
                return true;
            }else{
                return false;
            }
        }else{
            return true;
        }
    }else{
        return false;
    }

    

};

// Do not edit below this line
module.exports = leapYears;
