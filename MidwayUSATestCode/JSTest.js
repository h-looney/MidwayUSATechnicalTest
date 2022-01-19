let hour = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
let ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let tens = ["", "", "twenty"];
let teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

function convertTimeToWords(hours, minutes) {
    var alterHour = 0;
    var hourVal = 0;
    try {
        if (typeof hours != 'number') {
            return "Your hour value isn't an integer.";
        }
        else if (typeof minutes != 'number') {
            return "Your minute value isn't an integer";
        }
        else if (hours < 0) {
            return "Make sure that you enter a hour value greater than zero.";
        }
        else if (hours > 12) {
            return "Make sure that you enter a hour value less than twelve.";
        }
        else if (minutes < 0) {
            return "Make sure that you enter a minute value greater than zero.";
        }
        else if (minutes > 59) {
            return "Make sure that you enter a minute value no greater than 59.";
        }
        alterHour = hours - 1;
        hourVal = hour[alterHour];
    }
    catch (e) {
            return "Something is wrong with your hour or minute input.\nPlease check to make sure your input resides within the proper hour and minute ranges.";
    }
    var hourDigits = hours.toString().split('');
    var hourDecimal = hourDigits.includes('.');
    if (hourDecimal == true) {
        return 'Please make sure that your hour value does not contain a decimal.';  
    }
    var digits = minutes.toString().split('');
    var decimal = digits.includes('.');
    if (decimal == true) {
        return 'Please make sure that your minute value does not contain a decimal.';  
    }
    if (digits.length > 1) {
        if (minutes < 20 && minutes > 9) {
            var teenies = teens[digits[1]];
        }
        else {
            var tenies = tens[digits[0]];
            var onesies = ones[digits[1]];
        }
    }
    else {
        var onesies = ones[digits[0]];
    }
    try {
        if (minutes == 0) {
            return `${hours} o' clock`;
        }
        if (minutes == 15) {
            return `quarter past ${hourVal}`;
        }
        else if (minutes == 30) {
            return `half past ${hourVal}`;
        }
        else if (minutes == 45) {
            return `quarter to ${hourVal}`;
        }
        else if (minutes < 30) {
            if (minutes < 10) {
                return `${onesies} minutes past ${hourVal}`;
            }
            else if (minutes < 20) {
                return `${teenies} minutes past ${hourVal}`;
            }
            else {
                return `${tenies}-${onesies} minutes past ${hourVal}`;
            }
        }
        else if (minutes > 30) {
            var toMinute = 60 - minutes;
            hourVal = hour[hours];
            digits = toMinute.toString().split('');
            if (digits.length > 1) {
                if (toMinute < 20 && toMinute > 9) {
                    teenies = teens[digits[1]];
                }
                else {
                    tenies = tens[digits[0]];
                    onesies = ones[digits[1]];
                }
            }
            else {
                onesies = ones[digits[0]];
            }
            if (toMinute < 10) {
                
                return `${onesies} minutes to ${hourVal}`;
            }
            else if (toMinute < 20) {
                return `${teenies} minutes to ${hourVal}`;
            }
            else {

                return `${tenies}-${onesies} minutes to ${hourVal}`;
            }
        }
    }
    catch (e) {
        return "ERROR";
    }
}
